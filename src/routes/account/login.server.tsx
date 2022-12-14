import React, { Suspense } from 'react'
import {
    gql,
    CacheNone,
    Seo,
    type HydrogenRouteProps,
        HydrogenRequest,
        HydrogenApiRouteOptions
} from '@shopify/hydrogen'
import { Layout } from '../../components/index'
import {AccountLoginForm} from '../../components'

export default function Login({response}: HydrogenRouteProps) {
    response.cache(CacheNone())
  return (
    <Layout>
        <Suspense>
            <Seo type='noindex' data={{ title: 'Login' }}/>
        </Suspense>
        <AccountLoginForm/>
    </Layout>
  )
}

export async function api(
  request: HydrogenRequest,
  {session, queryShop}: HydrogenApiRouteOptions,
) {
  if (!session) {
    return new Response('Session storage not available.', {status: 400});
  }

  const jsonBody = await request.json();

  if (!jsonBody.email || !jsonBody.password) {
    return new Response(
      JSON.stringify({error: 'Incorrect email or password.'}),
      {status: 400},
    );
  }

  const {data, errors} = await queryShop<{customerAccessTokenCreate: any}>({
    query: LOGIN_MUTATION,
    variables: {
      input: {
        email: jsonBody.email,
        password: jsonBody.password,
      },
    },
    // @ts-expect-error `queryShop.cache` is not yet supported but soon will be.
    cache: CacheNone(),
  });

  if (data?.customerAccessTokenCreate?.customerAccessToken?.accessToken) {
    await session.set(
      'customerAccessToken',
      data.customerAccessTokenCreate.customerAccessToken.accessToken,
    );

    return new Response(null, {
      status: 200,
    });
  } else {
    return new Response(
      JSON.stringify({
        error: data?.customerAccessTokenCreate?.customerUserErrors ?? errors,
      }),
      {status: 401},
    );
  }
}

const LOGIN_MUTATION = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
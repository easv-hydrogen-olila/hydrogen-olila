import React, { Suspense } from 'react'
import {
    CacheNone,
    Seo,
    type HydrogenRouteProps
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

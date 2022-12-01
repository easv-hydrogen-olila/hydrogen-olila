import {
    CacheNone,
    useSession,
    type HydrogenRouteProps
} from '@shopify/hydrogen'

export default function Account({response}: HydrogenRouteProps) {
    response.cache(CacheNone())

    const { customerAccessToken } = useSession()

    if(!customerAccessToken) return response.redirect('/account/login')

  return (
    <div>Account</div>
  )
}

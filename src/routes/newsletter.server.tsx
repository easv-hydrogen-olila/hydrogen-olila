import React from 'react'
import { FooterNewsletter } from '../components'

export function Newsletter() {
  return (
    <FooterNewsletter/>
  )
}

// export async function api(request:RequestInfo) {
//     if (request.method!=='POST'){
//         return new Response(405, {Allow: 'POST'})
//     }

//     const {email} = await request.json()
//     return {email, status: 'subscribed'}
// }

import React from 'react'
import { FooterNewsletter } from '../components'

export function Newsletter() {
  return (
    <FooterNewsletter/>
  )
}
        // @ts-ignore

export async function api(request) {
    if (request.method!=='POST'){
        // @ts-ignore
        return new Response(200, {Allow: 'POST'})
    }
    

    const {email} = await request.json()
    return {email, status: 'subscribed'}
}

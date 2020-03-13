/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

const cmuOAuthHref: UrlObject = {
  protocol: 'https',
  hostname: 'oauth.cmu.ac.th',
  pathname: 'v1/Authorize.aspx',
  query: {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/callback',
    scope: 'cmuitaccount.basicinfo',
    state: 'login',
  },
}

const Index = () => {
  // return <a href={cmuOauthLink}>Login with CMU account</a>
  return (
    <Link href={cmuOAuthHref}>
      <a>Login</a>
    </Link>
  )
}

export default Index

/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

import SignInButton from '../components/SignInButton'

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
    <div
      style={{
        minHeight: '100vh',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '32rem',
          margin: 'auto',
        }}
      >
        <p
          style={{
            marginBottom: '7rem',
            fontSize: '2.5rem',
            fontWeight: 500,
            color: '#004DC7',
            marginTop: 0,
          }}
        >
          DJARN
        </p>
        <Link href={cmuOAuthHref} passHref>
          <SignInButton
            ButtonName={'Sign in with CMU account'}
            ButtonColor={'#C1DBFF'}
            textColor={'#304AAC'}
            width={'100%'}
            flex={'none'}
            size={'1rem'}
            style={{ margin: '2rem', maxWidth: '20rem' }}
          />
        </Link>
      </div>
    </div>
  )
}

export default Index

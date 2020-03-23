/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Axios from 'axios'
// import { useQuery } from '@apollo/react-hooks'
import cookie from '~/api/cookie'

type CMUOAuthResponse = {
  access_token: string
  refresh_token: string
  expire_in: string
}

const Callback: NextPage<CMUOAuthResponse> = ({
  access_token,
  refresh_token,
}) => {
  const router = useRouter()

  useEffect(() => {
    /**
     * Save access and refresh token to local storage.
     */
    cookie.set('token', access_token)
    cookie.set('refresh', refresh_token)

    /**
     * Redirect for check authorization
     */
    router.push('/me')
  }, [])

  return null
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ query }) => {
  /**
   * Retrive access and refresh token
   */
  const { data } = await Axios.post<CMUOAuthResponse>(
    'https://oauth.cmu.ac.th/v1/GetToken.aspx',
    null,
    {
      params: {
        ...query,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_SERVER_CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000/callback',
        grant_type: 'authorization_code',
      },
    },
  )

  return { props: data }
}

export default Callback

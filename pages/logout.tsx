import React, { useEffect } from 'react'
import cookie from '~/api/cookie'

const Logout = () => {
  useEffect(() => {
    /**
     * Remove access and refresh token from cookie
     */
    cookie.remove('token')
    cookie.remove('refresh')
  }, [])
  return <p>Logged out</p>
}

export default Logout

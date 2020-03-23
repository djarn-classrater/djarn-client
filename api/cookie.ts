import cookie from 'js-cookie'

cookie.defaults = {
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
}

export default cookie

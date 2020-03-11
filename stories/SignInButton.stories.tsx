import React from 'react'
import SignInButton from '../components/SignInButton'

export default {
  component: SignInButton,
  title: 'Sign In Button',
  excludestories: /.*Data$/,
}

export const defaultCreateButton = () => {
  return (
    <SignInButton
      ButtonName={'Sign in with CMU account'}
      ButtonColor={'#C1DBFF'}
      textColor={'#304AAC'}
      width={'100%'}
      flex={'none'}
      size={'1.25rem'}
    />
  )
}

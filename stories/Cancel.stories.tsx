import React from 'react'
import SignInButton from '../components/SignInButton'

export default {
  component: SignInButton,
  title: 'Cancel Button',
  excludestories: /.*Data$/,
}

export const defaultCreateButton = () => {
  return (
    <SignInButton
      ButtonName={'Cancel'}
      ButtonColor={'#FFFFFF'}
      textColor={'#F03939'}
      width={'100%'}
      flex={'none'}
      size={'1.125rem'}
    />
  )
}

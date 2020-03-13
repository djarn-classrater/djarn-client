import React from 'react'
import SignInButton from '../components/SignInButton'

export default {
  component: SignInButton,
  title: 'Create Button',
  excludestories: /.*Data$/,
}

export const defaultCreateButton = () => {
  return (
    <SignInButton
      ButtonName={'Create a review'}
      ButtonColor={'#3B6FFF'}
      textColor={'#FFFFFF'}
      width={'100%'}
      flex={'none'}
      size={'1.125rem'}
    />
  )
}

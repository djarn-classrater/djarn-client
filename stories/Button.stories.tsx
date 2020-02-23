import React from 'react'

import Button from '../components/Button'

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
}

export const defaultButton = () => {
  return (
    <Button text={'click'}></Button>
  )
}

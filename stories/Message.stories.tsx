import React from 'react'

import { MassageInput } from '../components/Message'

export default {
  component: MassageInput,
  title: 'MassageInput',
  excludeStories: /.*Data$/,
}

export const defaultMassage = () => {
  return (
    <MassageInput />
  )
}
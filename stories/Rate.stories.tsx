import React from 'react'

import { Rate } from '../components/Rate'

export default {
  components: Rate,
  title: 'Rate',
  excludeStories: /.*Data$/,
}

export const defaultRate = () => {
  return (
    <Rate />
  )
}
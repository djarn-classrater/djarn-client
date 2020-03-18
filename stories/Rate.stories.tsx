import React from 'react'

import { Rate } from '../components/Rate'

export default {
  components: Rate,
  title: 'Rate',
  excludeStories: /.*Data$/,
}

export const defaultRate = () => {
  return <Rate rate={'4.2'} reviewer={'1000'} />
}
export const defaultLoadRate = () => {
  return <Rate loading />
}

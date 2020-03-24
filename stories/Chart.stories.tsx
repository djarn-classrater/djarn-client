import React from 'react'

import { Chart } from '../components/Chart'
import { Rating } from '~/generated/graphql'

export default {
  components: Chart,
  title: 'Chart',
  excludeStories: /.*Data$/,
}

export const defaultChart = () => {
  const rating: Rating = {
    _1: 0,
    _2: 0,
    _3: 0,
    _4: 1,
    _5: 3,
  }
  return <Chart rating={rating} />
}

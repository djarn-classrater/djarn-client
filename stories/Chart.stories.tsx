import React from 'react'

import { Chart } from '../components/Chart'

export default {
  components: Chart,
  title: 'Chart',
  excludeStories: /.*Data$/,
}

export const defaultChart = () => {
  return <Chart />
}

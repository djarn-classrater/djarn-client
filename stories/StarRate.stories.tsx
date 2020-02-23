import React from 'react'

import StarRate from '../components/StarRate'

export default {
  component: StarRate,
  title: 'StarRate',
  excludeStories: /.*Data$/,
}

export const defaultStarRate = () => {
  return (
    <StarRate value={3} starSize={'2rem'} starMargin={'1rem'}/>
  )
}


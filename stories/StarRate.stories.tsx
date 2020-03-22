import React, { useState } from 'react'
import StarRate, { Rate } from '../components/StarRate'

export default {
  component: StarRate,
  title: 'StarRate',
  excludeStories: /.*Data$/,
}

export const defaultStarRate = () => {
  return <StarRate intialRate={3} starSize={'2rem'} starMargin={'1rem'} />
}

export const defaultLoadStarrate = () => {
  return <StarRate loading />
}

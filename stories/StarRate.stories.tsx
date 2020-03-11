import React, { useState } from 'react'
import StarRate, { RateProp } from '../components/StarRate'

export default {
  component: StarRate,
  title: 'StarRate',
  excludeStories: /.*Data$/,
}

export const defaultStarRate = () => {
  const [rate, setRate] = useState<RateProp>(3)

  return (
    <StarRate
      value={rate}
      starSize={'2rem'}
      starMargin={'1rem'}
      onClick={value => setRate(value)}
    />
  )
}

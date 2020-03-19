import React from 'react'
import Review from '../components/WriteReviewArea'

export default {
  component: Review,
  title: 'WriteReview',
  excludeStories: /.*Data$/,
}

export const defaultReview = () => {
  return <Review height={'18.25rem'} />
}

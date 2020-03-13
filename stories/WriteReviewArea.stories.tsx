import React from 'react'
import Review from '../components/WriteReviewArea'

export default {
  component: Review,
  title: 'WriteReview',
  excludeStories: /.*Data$/,
}

export const defaultReview = () => {
  return (
    <Review
      text={'Write a review'}
      top={'14.5rem'}
      left={'1.3125rem'}
      width={'23.25rem'}
      height={'18.25rem'}
      background={'#F8F8F8 0% 0% no-repeat padding-box'}
      textcolor={'#909090'}
    />
  )
}

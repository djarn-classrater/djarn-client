import React from 'react'
import { ReviewTables } from '../components/ReviewTables'
import Course from '../components/Course'

export default {
  components: ReviewTables,
  title: 'ReviewTables',
  excludeStories: /.*Data$/,
}

export const defaultReviewTables = () => {
  return (
    <>
      <ReviewTables />
    </>
  )
}

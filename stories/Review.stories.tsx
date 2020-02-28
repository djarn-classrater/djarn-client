import React from 'react'
import Review from '../components/Review'

export default {
  component: Review,
  title: 'Review',
  excludeStories: /.*Data$/,
}

export const defaultReview = () => {
  return (
    <>
    <Review 
    name={'Ekawit jaidee'} 
    review={'i am studied this course i am very happy so much teacher is very nice he always teach me to understand everything on lesson'} 
    date={'14 jan 2542'} 
    heart={true}/>
    </>
  )
}

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
        context={
          'มีความสุขกับการเรียนวิชานี้มากเลยครับ อาจารย์สอนเข้าใจมาก ได้เกรดเอง่ายมากครับ'
        }
        date={'14 jan 2542'}
        heart={true}
      />
    </>
  )
}

export const loadingReview = () => {
  return (
    <>
      <Review loading />
    </>
  )
}

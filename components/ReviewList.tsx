import React, { FunctionComponent } from 'react'
import Review from './Review'
import { ReviewType } from '~/generated/graphql'

interface Props {
  reviews?: Array<ReviewType>
  loading?: boolean
}
const ReviewList: FunctionComponent<Props> = ({ loading, reviews }) => {
  if (loading)
    return (
      <>
        {Array(4)
          .fill(null)
          .map(() => (
            // eslint-disable-next-line react/jsx-key
            <Review style={{ margin: '0 -0.5rem 1rem -0.5rem' }} loading />
          ))}
      </>
    )
  return (
    <>
      {reviews.length !== 0 ? (
        reviews.map((review, idx) => (
          <Review
            key={idx}
            style={{ margin: '0 -0.5rem 1rem -0.5rem' }}
            name={
              review.user &&
              `${review.user.firstNameTH} ${review.user.lastNameTH}`
            }
            heart={review.like}
            data={review}
          />
        ))
      ) : (
        <p
          style={{
            color: 'rgb(116, 116, 116)',
            textAlign: 'center',
          }}
        >
          No review
        </p>
      )}
    </>
  )
}
export default ReviewList

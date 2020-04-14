import React, { FunctionComponent } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Review from './Review'
import {
  ReviewType,
  MutationCreateLikeArgs,
  MutationDeleteLikeArgs,
} from '~/generated/graphql'

const LIKE = gql`
  fragment like on LikeType {
    id
    review {
      id
      like
    }
  }
`

const CREATE_LIKE = gql`
  mutation createLike($reviewId: Int!) {
    createLike(reviewId: $reviewId) {
      ...like
    }
  }
  ${LIKE}
`

const DELETE_LIKE = gql`
  mutation deleteLike($reviewId: Int!) {
    deleteLike(reviewId: $reviewId) {
      ...like
    }
  }
  ${LIKE}
`

const GET_REVIEW = gql`
  query reviews($studentId: String!, $courseId: String!) {
    reviews(studentId: $studentId, courseId: $courseId) {
      id
      like
    }
  }
`

interface Props {
  reviews?: Array<ReviewType>
  loading?: boolean
}

const ReviewList: FunctionComponent<Props> = ({ loading, reviews }) => {
  const [createLike] = useMutation<any, MutationCreateLikeArgs>(CREATE_LIKE)
  const [deleteLike] = useMutation<any, MutationDeleteLikeArgs>(DELETE_LIKE)

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
            onLikeClick={async ({ id, like, studentId, courseId }) => {
              if (!like) {
                await createLike({
                  variables: { reviewId: id },
                })
              } else {
                await deleteLike({
                  variables: { reviewId: id },
                  // fix delete response in server
                  refetchQueries: [
                    {
                      query: GET_REVIEW,
                      variables: { studentId, courseId },
                    },
                  ],
                })
              }
            }}
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

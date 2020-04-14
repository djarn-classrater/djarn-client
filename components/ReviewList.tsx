import React, { FunctionComponent } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Review from './Review'
import {
  ReviewType,
  Mutation,
  MutationCreateLikeArgs,
  MutationDeleteLikeArgs,
} from '~/generated/graphql'

const LIKE = gql`
  fragment like on LikeType {
    id
    review {
      id
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

interface Props {
  reviews?: Array<ReviewType>
  loading?: boolean
}

const ReviewList: FunctionComponent<Props> = ({ loading, reviews }) => {
  const [createLike] = useMutation<
    { createLike: Mutation['createLike'] },
    MutationCreateLikeArgs
  >(CREATE_LIKE)
  const [deleteLike] = useMutation<
    { deleteLike: Mutation['createLike'] },
    MutationDeleteLikeArgs
  >(DELETE_LIKE)

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
            onLikeClick={async ({ id, like }) => {
              if (!like) {
                await createLike({
                  variables: { reviewId: id },
                  update: (proxy, { data }) => {
                    const { review } = data.createLike
                    proxy.writeData<Partial<ReviewType>>({
                      id: `ReviewType:${review.id}`,
                      data: {
                        __typename: 'ReviewType',
                        id: review.id,
                        like: true,
                      },
                    })
                  },
                })
              } else {
                await deleteLike({
                  variables: { reviewId: id },
                  update: (proxy, { data }) => {
                    const { review } = data.deleteLike
                    proxy.writeData<Partial<ReviewType>>({
                      id: `ReviewType:${review.id}`,
                      data: {
                        __typename: 'ReviewType',
                        id: review.id,
                        like: false,
                      },
                    })
                  },
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

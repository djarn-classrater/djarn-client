import React, { useRef } from 'react'
import { gql } from 'apollo-boost'
import Error from 'next/error'
import { format } from 'url'
import WriteReviewArea from '~/components/WriteReviewArea'
import CourseDetail from '~/components/CourseDetail'
import CreatReviewButton from '~/components/CreateReviewButton'
import Cancel from '~/components/Cancel'
import StarRate, { Rate } from '~/components/StarRate'
import Layout from '~/components/Layout'
import { Query } from 'react-apollo'
import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { UserType, ReviewType, RateType } from '~/generated/graphql'

const GET_MY_REVIEW = gql`
  query getMyReview($courseId: String) {
    me {
      reviews(courseId: $courseId) {
        id
        studentId
        rate
        context
        rateInfo {
          id
        }
        course {
          courseId
          courseName
        }
      }
    }
  }
`

const UPDATE_REVIEW = gql`
  mutation updateReview(
    $reviewId: Int!
    $rateId: Int!
    $context: String!
    $rate: Int!
  ) {
    updateReview(id: $reviewId, context: $context) {
      id
    }
    updateRate(id: $rateId, rate: $rate) {
      id
    }
  }
`

const UpdateReviewPage = () => {
  const router = useRouter()

  const textAreaRef = useRef<HTMLTextAreaElement>()
  const starRateRef = useRef<HTMLInputElement>()

  /**
   * Mutation hook for update review.
   */
  const [updateReview, { loading, error, data }] = useMutation<{
    updateReview: ReviewType
    updateRate: RateType
  }>(UPDATE_REVIEW)

  /**
   * Create review action stage.
   */
  if (loading) return <p>Sending...</p>
  if (error) return <p>{JSON.stringify(error)}</p>
  if (data) return <p>{JSON.stringify(data)}</p>

  return (
    <Layout>
      <Query<{ me: UserType }> query={GET_MY_REVIEW} variables={router.query}>
        {({ loading, error, data }) => {
          if (loading) return <CourseDetail loading />
          if (error) {
            console.log(JSON.stringify(error))
            return <Error statusCode={500} />
          }

          const {
            me: { reviews },
          } = data
          const review = reviews[0]

          return (
            <>
              <CourseDetail {...review.course} />
              <StarRate
                ref={starRateRef}
                styleContainer={{
                  justifyContent: 'center',
                  marginBottom: '2.5rem',
                }}
                intialRate={(+review.rate as Rate) || 0}
                starSize="2.5rem"
              />
              <WriteReviewArea height={'18.25rem'} ref={textAreaRef}>
                {review.context}
              </WriteReviewArea>
              <CreatReviewButton
                onClick={async () => {
                  console.log({
                    context: textAreaRef.current.value,
                    rate: starRateRef.current.valueAsNumber,
                    ...router.query,
                  })
                  await updateReview({
                    variables: {
                      reviewId: review.id,
                      rateId: review.rateInfo.id,
                      context: textAreaRef.current.value,
                      rate: starRateRef.current.valueAsNumber,
                    },
                  })
                  window.location.assign(
                    format({
                      pathname: '/course',
                      query: {
                        courseId: router.query.courseId,
                      },
                    }),
                  )
                }}
              />
              <Cancel />
            </>
          )
        }}
      </Query>
    </Layout>
  )
}

export default UpdateReviewPage

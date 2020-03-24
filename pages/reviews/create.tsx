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
import { CourseType, ReviewType } from '~/generated/graphql'

const COURSE = gql`
  query getCourse($courseId: String!) {
    course(courseId: $courseId) {
      courseId
      courseName
    }
  }
`
const CREATE_REVIEW = gql`
  mutation createReview($courseId: String!, $context: String, $rate: Int!) {
    createReview(courseId: $courseId, context: $context, rate: $rate) {
      id
      studentId
      courseId
      context
      rate
    }
  }
`
const WriteReviewPage = () => {
  const router = useRouter()

  const textAreaRef = useRef<HTMLTextAreaElement>()
  const starRateRef = useRef<HTMLInputElement>()

  /**
   * Mutation hook for create review.
   */
  const [createReview, { loading, error, data }] = useMutation<{
    review: ReviewType
  }>(CREATE_REVIEW)
  /**
   * Create review action stage.
   */
  if (loading) return <p>Sending...</p>
  if (error) return <p>{JSON.stringify(error)}</p>
  if (data) return <p>{JSON.stringify(data)}</p>

  return (
    <Layout>
      <Query<{ course: CourseType }> query={COURSE} variables={router.query}>
        {({ loading, error, data }) => {
          if (loading) return <CourseDetail loading />
          if (error) {
            console.log(JSON.stringify(error))
            return <Error statusCode={500} />
          }

          const { course } = data
          return <CourseDetail {...course} />
        }}
      </Query>
      <StarRate
        ref={starRateRef}
        styleContainer={{ justifyContent: 'center', marginBottom: '2.5rem' }}
        intialRate={(+router.query.rate as Rate) || 0}
        starSize="2.5rem"
      />
      <WriteReviewArea height={'18.25rem'} ref={textAreaRef} />
      <CreatReviewButton
        onClick={async () => {
          console.log({
            context: textAreaRef.current.value,
            rate: starRateRef.current.valueAsNumber,
            ...router.query,
          })
          await createReview({
            variables: {
              courseId: router.query.courseId,
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
    </Layout>
  )
}

export default WriteReviewPage

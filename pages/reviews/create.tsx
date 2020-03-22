import React, { useRef } from 'react'
import { gql } from 'apollo-boost'

import WriteReviewArea from '~/components/WriteReviewArea'
import CourseDetail from '~/components/CourseDetail'
import CreatReviewButton from '~/components/CreateReviewButton'
import Cancel from '~/components/Cancel'
import StarRate from '~/components/StarRate'
import Layout from '~/components/Layout'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

const COURSE = gql`
  query getCourse($courseId: String!) {
    course(courseId: $courseId) {
      courseId
      courseName
    }
  }
`
const CREATE_REVIEW = gql`
  mutation createReview($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
    }
  }
`
const WriteReviewPage = () => {
  const router = useRouter()

  const textAreaRef = useRef<HTMLTextAreaElement>()
  const starRateRef = useRef<HTMLInputElement>()

  const { data, loading, error } = useQuery(COURSE, {
    variables: router.query,
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  const { course } = data

  return (
    <Layout>
      <CourseDetail {...course} />
      <StarRate
        ref={starRateRef}
        styleContainer={{ justifyContent: 'center', marginBottom: '2.5rem' }}
        intialRate={0}
        starSize="2.5rem"
        onChange={e => console.log(e)}
      />
      <WriteReviewArea
        onChange={e => console.log(e)}
        height={'18.25rem'}
        ref={textAreaRef}
      />
      <CreatReviewButton
        onClick={() =>
          console.log({
            context: textAreaRef.current.value,
            rate: starRateRef.current.valueAsNumber,
            ...router.query,
          })
        }
      />
      <Cancel />
    </Layout>
  )
}

export default WriteReviewPage

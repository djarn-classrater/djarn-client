import React from 'react'
import { gql } from 'apollo-boost'

import WriteReview from '~/components/WriteReviewArea'
import CourseDetail from '~/components/CourseDetail'
import CreatButton from '~/components/CreateReviewButton'
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

const WriteReviewPage = () => {
  const router = useRouter()

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
        styleContainer={{ justifyContent: 'center', marginBottom: '2.5rem' }}
        value={3}
        starSize="2.5rem"
      />
      <WriteReview height={'18.25rem'} />
      <CreatButton />
      <Cancel />
    </Layout>
  )
}

export default WriteReviewPage

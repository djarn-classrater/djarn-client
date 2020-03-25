import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import CourseDetail from '../components/CourseDetail'
import { Rate } from '../components/Rate'
import StarRate from '../components/StarRate'
import Review from '../components/Review'
import { CourseType, UserType } from '~/generated/graphql'

const COURSE = gql`
  query getCourse($courseId: String!) {
    course(courseId: $courseId) {
      facultyName
      courseId
      courseName
      courseCredit
      courseDescription

      reviews {
        studentId
        courseId
        context
        date
        rate
        user {
          firstNameTH
          lastNameTH
        }
      }

      ratingSummary {
        mean
        reviewer
        rating {
          _1
          _2
          _3
          _4
          _5
        }
      }
    }

    me {
      reviews(courseId: $courseId) {
        id
      }
    }
  }
`

const Course = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery<{
    course: CourseType
    me: UserType
  }>(COURSE, {
    variables: router.query,
  })

  if (loading)
    return (
      <Layout>
        <CourseDetail loading />
        <Rate loading />
        <Review style={{ margin: '0 4px 1rem 4px' }} loading />
        <Review style={{ margin: '0 4px 1rem 4px' }} loading />
        <Review style={{ margin: '0 4px 1rem 4px' }} loading />
        <Review style={{ margin: '0 4px 1rem 4px' }} loading />
        <Review style={{ margin: '0 4px 1rem 4px' }} loading />
      </Layout>
    )
  if (error) return <p>{error.message}</p>

  const { course, me } = data

  return (
    <Layout>
      <CourseDetail {...course} courseLo="HB555" />
      <Rate {...course.ratingSummary} />
      {!me.reviews[0] && (
        <>
          <p style={{ textAlign: 'center', margin: '0.5rem' }}>Tap to rate</p>
          <StarRate
            intialRate={0}
            starSize="2.5rem"
            starMargin="1rem"
            onClick={rate => {
              router.push({
                pathname: '/reviews/create',
                query: {
                  courseId: router.query.courseId,
                  rate,
                },
              })
            }}
            styleContainer={{
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}
          />
        </>
      )}
      {course.reviews.length != 0 ? (
        course.reviews.map((review, idx) => (
          <Review
            key={idx}
            style={{ margin: '0 -0.5rem 1rem -0.5rem' }}
            name={
              review.user &&
              `${review.user.firstNameTH} ${review.user.lastNameTH}`
            }
            data={review}
            heart={true}
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
    </Layout>
  )
}

export default Course

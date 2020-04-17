import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import CourseDetail from '../components/CourseDetail'
import { Rate } from '../components/Rate'
import StarRate from '../components/StarRate'
import { CourseType, UserType } from '~/generated/graphql'
import ReviewList from '~/components/ReviewList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  margin: 1rem 0.35rem 1rem 0rem;
`

const Title = styled.div`
  margin: auto;
  flex: 1;
`

const Clickable = styled.div`
  margin: -1rem;
  padding: 1rem;
`

const EditIcon = styled(FontAwesomeIcon)`
  margin: auto;
  flex: none;
`

const COURSE = gql`
  query getCourse($courseId: String!) {
    course(courseId: $courseId) {
      facultyName
      courseId
      courseName
      courseCredit
      courseDescription

      reviews(includeMe: false) {
        id
        studentId
        courseId
        context
        date
        rate
        like
        likes
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
        studentId
        context
        date
        rate
        like
        likes
        user {
          firstNameTH
          lastNameTH
        }
      }
    }
  }
`

const Course = () => {
  const router = useRouter()

  const { data, ...state } = useQuery<{
    course: CourseType
    me: UserType
  }>(COURSE, {
    variables: router.query,
  })

  const { course, me } = data || { course: null, me: null }
  const { ratingSummary, reviews } = course || {
    ratingSummary: null,
    reviews: null,
  }

  return (
    <Layout>
      <CourseDetail {...state} {...course} courseLo="HB555" />
      <Rate {...state} {...ratingSummary} />
      {!state.loading &&
        (me.reviews[0] ? (
          <>
            <TitleContainer>
              <Title>Your review</Title>
              <Clickable
                onClick={() => {
                  router.push({
                    pathname: '/reviews/edit',
                    query: {
                      courseId: router.query.courseId,
                    },
                  })
                }}
              >
                <EditIcon icon={faEdit} color={'lightgray'} />
              </Clickable>
            </TitleContainer>
            <ReviewList {...state} {...me} />
            <hr
              style={{
                border: '0.0625rem solid #EAEAEA',
                marginBottom: '1rem',
              }}
            />
          </>
        ) : (
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
        ))}
      <ReviewList {...state} reviews={reviews} />
      {!state.loading && me.reviews.length === 0 && reviews.length === 0 && (
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

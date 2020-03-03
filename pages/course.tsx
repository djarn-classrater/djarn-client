import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

import CourseDetail  from '../components/CourseDetail'
import { Rate } from '../components/Rate'
import { StarRate } from '../components/StarRate'
import Review from '../components/Review'

const COURSE = gql`
  query getCourse($course_id: String!){
    course(course_id: $course_id){
      faculty_name
      course_id
      course_name
      course_credit
      course_description
  	
      reviews {
        student_id
        course_id
        context
        date
      }
    }
  }
`

const Course = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery(COURSE, {
    variables: router.query
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  const { course } = data
  console.log(course)

  return (
    <div style={{ maxWidth: '32rem', margin: 'auto' }}>
      <CourseDetail {...course} courseLo='HB555'/>
      <div style={{margin:"11.2px"}}>
        <h3 style={{margin: "0"}}>Rate & Review </h3>
        <Rate/>
        <p style={{textAlign: "center",margin:"0.5rem"}}>Tap to rate</p>
        <StarRate 
          value={4}
          starSize="2.5rem"
          starMargin="1rem"
          styleContainer={{
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}
        />
      </div>
      {course.reviews.length != 0 ? course.reviews.map((review, idx) => (
        <div style={{ margin: '0 4px 1rem 4px' }}>
          <Review 
            key={idx}
            name={'Ekawit jaidee'} 
            context={review.context} 
            date={review.date} 
            heart={true}
          />
        </div>
      )) : (
        <p 
          style={{ 
            color: 'rgb(116, 116, 116)', 
            textAlign: 'center'
          }}
        >
          No review
        </p>
      )}
      </div>
  )
}

export default Course
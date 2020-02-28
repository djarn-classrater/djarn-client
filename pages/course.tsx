import React from 'react'

import CourseDetail  from '../components/CourseDetail'
import { Rate } from '../components/Rate'
import { StarRate } from '../components/StarRate'
import Review from '../components/Review'

const data = {
  courseName: 'Computer Engineering',
  courseId: '261000',
  courseInfo: 'This course is teach about how to write a program to make maximum optimal solution.',
  courseLo: 'HB555'
}



const Course = () => {
  return (
    <div style={{ maxWidth: '32rem', margin: 'auto' }}>
      <CourseDetail 
        courseName = {data.courseName} 
        courseId = {data.courseId} 
        courseInfo = {data.courseInfo}
        courseLo = {data.courseLo}
      />
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
      {Array(5).fill(null).map(() => (
        <div style={{ margin: '0 4px 1rem 4px' }}>
          <Review 
            name={'Ekawit jaidee'} 
            review={'มีความสุขกับการเรียนวิชานี้มากเลยครับ อาจารย์สอนเข้าใจมาก ได้เกรดเอง่ายมากครับ'} 
            date={'14 jan 2542'} 
            heart={true}
          />
        </div>
      ))}
      </div>
  )
}

export default Course
import React from 'react'

import Course from '../components/Course'

type Props = {
  term: string,
}

const ShowyourCourse = ({term}: Props) => {
  return (
    <div style={{margin:"0 0.7rem"}}>
      <h1 style={{
        fontSize: "1.5rem", 
        marginBottom: "0.5rem",
        marginTop: "3rem",
        fontWeight: 500
        }}>Review your course</h1>
      <p style={{
          color:"#6EABFF",
          fontWeight: 400,
          fontSize: "1.3rem",
          margin: 0,
          marginBottom: "0.8rem"
        }}>{term="2/2562"}
      </p>
      {Array(5).fill(null).map(() => (
        <Course 
          courseName = {'Computer Engineering'} 
          courseId = {'261000'} 
        />
      ))}
    </div>
  )
}

export default ShowyourCourse
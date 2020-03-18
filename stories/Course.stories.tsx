import React from 'react'

import Course from '../components/Course'

export default {
  component: Course,
  title: 'Course',
  excludeStories: /.*Data$/,
}

export const defaultCourse = () => {
  return (
    <>
      <Course
        courseTerm={'2/2562'}
        courseName={'Computer Engineering'}
        courseId={'261000'}
      />
      <Course courseName={'Computer Engineering'} courseId={'261000'} />
    </>
  )
}

export const defaultLoadingCourse = () => {
  return (
    <>
      <Course loading />
      <Course loading />
    </>
  )
}

import React from 'react'

import CourseDetail from '../components/CourseDetail'

export default {
  component: CourseDetail,
  title: 'CourseDetail',
  excludeStories: /.*Data$/,
}

export const defaultCourseDetail = () => {
  return (
    <CourseDetail
      courseName={'Computer Engineering'}
      courseId={'261000'}
      courseDescription={
        'This course is teach about how to write a program to make maximum optimal solution.'
      }
      courseLo={'HB555'}
    />
  )
}

export const defaultLoadCourseDetail = () => {
  return <CourseDetail loading />
}

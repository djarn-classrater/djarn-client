import React from 'react'

import CourseDetail from '../components/CourseDetail'

export default {
  component: CourseDetail,
  title: 'CourseDetail',
  excludeStories: /.*Data$/,
}

export const defaultCourseDetail = () => {
  return (
    <CourseDetail course_name = {'Computer Engineering'} 
    course_id = {'261000'} 
    course_description = {'This course is teach about how to write a program to make maximum optimal solution.'}
    courseLo = {'HB555'}
    />
  )
}


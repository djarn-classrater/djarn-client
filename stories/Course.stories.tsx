import React from 'react'

import Course from '../components/Course'

export default {
  component: Course,
  title: 'Course',
  excludeStories: /.*Data$/,
}

export const defaultCourse = () => {
  return (
    <Course courseName = {'Computer Engineering'} 
    courseId = {'261000'} 
    />
  )
}
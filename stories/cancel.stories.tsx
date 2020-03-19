import React from 'react'
import Cancel from '../components/Cancel'

export default {
  component: Cancel,
  title: 'Cancel',
  excludeStories: /.*Data$/,
}

export const defaultReview = () => {
  return <Cancel />
}

import React from 'react'

import CreatButton from '../components/CreateReviewButton'

export default {
  component: CreatButton,
  title: 'CreatButton',
  excludeStories: /.*Data$/,
}

export const defaultCreatButton = () => {
  return <CreatButton />
}

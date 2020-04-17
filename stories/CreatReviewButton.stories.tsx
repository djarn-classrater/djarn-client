import React from 'react'

import CreatButton from '../components/ReviewButton'

export default {
  component: CreatButton,
  title: 'CreatButton',
  excludeStories: /.*Data$/,
}

export const defaultCreatButton = () => {
  return <CreatButton title={'Test'} />
}

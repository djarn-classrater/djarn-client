import React from 'react'
import {PencilButton} from '../components/PencilButton'

export default {
  components: PencilButton,
  title: 'PencilButton',
  excludeStories: /.*Data$/,
}

export const defaultPencilButton = () => {
  return (
    <PencilButton />
  )
}
import React from 'react'
import Create_button from '../components/Create_button'

export default {
    component: Create_button,
    title: 'Create_button',
    excludestories: /.*Data$/,
}

export const defaultCreateButton = () => {
    return(
        <Create_button ButtonName = {'Create a review'} />
    )
}
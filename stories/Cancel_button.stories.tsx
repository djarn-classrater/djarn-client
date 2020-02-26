import React from 'react'
import Cancel_button from '../components/Cancel_button'

export default {
    component: Cancel_button,
    title: 'Cancel_button',
    excludestories: /.*Data$/,
}

export const defaultCancelButton = () => {
    return(
        <Cancel_button ButtonName = {'Cancel'} />
    )
}
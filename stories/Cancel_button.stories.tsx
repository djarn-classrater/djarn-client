import React from 'react'
import Cancel_button from '../components/Buttons'

export default {
    component: Cancel_button,
    title: 'Cancel_button',
    excludestories: /.*Data$/,
}

export const defaultCancelButton = () => {
    return(
        <Cancel_button ButtonName = {'Cancel'} ButtonColor = {'white'} textColor ={'red'} width = {'100%'} flex={'none'}/>
    )
}
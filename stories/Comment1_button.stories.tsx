import React from 'react'
import Comment1_button from '../components/Buttons'

export default {
    component: Comment1_button,
    title: 'Comment1_button',
    excludestories: /.*Data$/,
}

export const defaultCommentsButton = () => {
    return(
        <Comment1_button ButtonName = {'Comments'} ButtonColor = {'white'} textColor ={'grey'}  width ={'50%'} flex={'none'} size={'0.875rem'}/>
    )
}
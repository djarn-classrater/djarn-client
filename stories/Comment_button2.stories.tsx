import React from 'react'
import Comment2_button from '../components/Buttons'

export default {
    component: Comment2_button,
    title: 'Comment2_button',
    excludestories: /.*Data$/,
}

export const defaultCommentsButton = () => {
    return(
        <Comment2_button ButtonName = {'Comments'} ButtonColor = {'rgb(102, 64, 240)'} textColor ={'white'}  width ={'50%'}/>
    )
}
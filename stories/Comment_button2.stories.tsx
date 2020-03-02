import React from 'react'
import Comment2_button from '../components/Buttons'

export default {
    component: Comment2_button,
    title: 'Comment2_button',
    excludestories: /.*Data$/,
}

export const defaultCommentsButton = () => {
    return(
        <Comment2_button ButtonName = {'Comments'} ButtonColor = {'#3B6FFF'} textColor ={'white'}  width ={'50%'} flex={'none'} size={'0.875rem'}/>
    )
}
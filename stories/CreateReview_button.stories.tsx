import React from 'react'
import CreateReview_button from '../components/Buttons'

export default {
    component: CreateReview_button,
    title: 'CreateReview_button',
    excludestories: /.*Data$/,
}

export const defaultCreateReviewButton = () => {
    return(
        <CreateReview_button ButtonName = {'CREATE REVIEW'} ButtonColor = {'rgb(102, 64, 240)'} textColor ={'white'} width = {'100%'} flex={'none'}/>
    )
}
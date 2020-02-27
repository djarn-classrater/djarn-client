import React from 'react'
import CreateReview_button from '../components/Create_button'

export default {
    component: CreateReview_button,
    title: 'CreateReview_button',
    excludestories: /.*Data$/,
}

export const defaultCreateReviewButton = () => {
    return(
        <CreateReview_button ButtonName = {'CREATE REVIEW'} />
    )
}
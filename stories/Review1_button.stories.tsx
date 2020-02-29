import React from 'react'
import Review1_button from '../components/Buttons'

export default {
    component: Review1_button,
    title: 'Review1_button',
    excludestories: /.*Data$/,
}

export const defaultReviewButton = () => {
    return(
        <Review1_button ButtonName = {'Reviews'} ButtonColor = {'white'} textColor ={'grey'}  width ={'50%'}/>
    )
}
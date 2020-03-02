import React from 'react'
import Review2_button from '../components/Buttons'

export default {
    component: Review2_button,
    title: 'Review2_button',
    excludestories: /.*Data$/,
}

export const defaultReviewButton = () => {
    return(
        <Review2_button ButtonName = {'Reviews'} ButtonColor = {'#3B6FFF'} textColor ={'white'}  width ={'50%'} flex={'1'} size={'0.875rem'}/>
    )
}
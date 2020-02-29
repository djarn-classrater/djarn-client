import React from 'react'
import Review2_button from '../components/Buttons'

export default {
    component: Review2_button,
    title: 'Review2_button',
    excludestories: /.*Data$/,
}

export const defaultReviewButton = () => {
    return(
        <Review2_button ButtonName = {'Reviews'} ButtonColor = {'rgb(102, 64, 240)'} textColor ={'white'}  width ={'50%'} flex={'1'}/>
    )
}
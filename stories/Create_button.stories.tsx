import React from 'react'
import Create_button from '../components/Buttons'

export default {
    component: Create_button,
    title: 'Create_button',
    excludestories: /.*Data$/,
}

export const defaultCreateButton = () => {
    return(
        <Create_button ButtonName = {'Create a review'} ButtonColor = {'rgb(102, 64, 240)'} textColor ={'white'} width = {'100%'} flex={'none'}/>
        
    )
}
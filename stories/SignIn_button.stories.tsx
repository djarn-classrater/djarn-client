import React from 'react'
import SignIn_button from '../components/Buttons'

export default {
    component: SignIn_button,
    title: 'SignIn_button',
    excludestories: /.*Data$/,
}

export const defaultCreateButton = () => {
    return(
        <SignIn_button ButtonName = {'Sign in with CMU account'} ButtonColor = {'#C1DBFF'} textColor ={'#304AAC'} width = {'100%'} flex={'none'} size = {'1.25rem'}/>
        
    )
}
import React from 'react'
import  '../styles/index.css'

type Props = {
    ButtonName: string
}

export default({ButtonName}: Props) => {
    return(
        <button className ="buttonCreate" type="button">
    {ButtonName}
  </button>
    );
}
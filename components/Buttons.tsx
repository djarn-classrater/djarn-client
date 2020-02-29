import React from 'react'
import  '../styles/index.css'

type Props = {
    ButtonName: string
    ButtonColor: string
    textColor: string
    width: string
}

export default({ButtonName , ButtonColor , textColor ,width } :Props) => {
    return(
        <button  type="button" 
        style = {{
            flex: 1 ,
            borderRadius: '1.25rem',
            border: "none",
            color: `${textColor}`,
            backgroundColor: `${ButtonColor}`,
            textDecoration: "none",
            fontStyle:" normal",
            width: `${width}`,
            fontWeight:300,
            fontSize: "0.875rem",
            padding: "0.75rem 0.75rem" ,
            cursor: "pointer"
        }}
    >
    {ButtonName}
  </button>
    );
}
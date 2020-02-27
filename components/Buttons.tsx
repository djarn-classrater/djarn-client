import React from 'react'
import  '../styles/index.css'

type Props = {
    ButtonName: string
    ButtonColor: string
    textColor: string
}

export default({ButtonName , ButtonColor , textColor  } :Props) => {
    return(
        <button  type="button" 
        style = {{
            borderRadius: '20px',
            border: "none",
            color: `${textColor}`,
            backgroundColor: `${ButtonColor}`,
            textDecoration: "none",
            fontStyle:" normal",
            width: "100%",
            fontSize: "14px",
            padding: "12px 12px" ,
            cursor: "pointer"
        }}
    >
    {ButtonName}
  </button>
    );
}
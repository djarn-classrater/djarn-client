import React from 'react'


type Props = {
    ButtonName: string
    ButtonColor: string
    textColor: string
    width: string
    flex: string
    size: string
}

export default({ButtonName , ButtonColor , textColor ,width,flex,size } :Props) => {
    return(
        <button  type="button" 
        style = {{
            flex: `${flex}` ,
            borderRadius: '1.25rem',
            border: "none",
            color: `${textColor}`,
            backgroundColor: `${ButtonColor}`,
            textDecoration: "none",
            fontStyle:" normal",
            width: `${width}`,
            fontWeight:300,
            fontSize: `${size}`,
            padding: "0.75rem 0.75rem" ,
            cursor: "pointer"
        }}
    >
    {ButtonName}
  </button>
    );
}
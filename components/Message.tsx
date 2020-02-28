import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

export const MassageInput = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <input 
          type="text" 
          placeholder="Write review" 
          style={{
            borderRadius: "20px", 
            borderStyle: "solid", 
            borderWidth: "1px", 
            borderColor: "#F0F0F0", 
            height: "2.25rem", 
            textIndent: "1rem" , 
            width: "100%",
          }}/>
      </div>
      <div style={{ flex: 'none' }}>
        <FontAwesomeIcon 
          icon={faChevronCircleRight} 
          color="#4B95E9"
          style={{
            width: '2.25rem',
            height: '2.25rem',
          }}
        />
      </div>
    </div>
  )
}
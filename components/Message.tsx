import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const MassageInput = () => {
  return (
    <div>
      <form >
        <label>
          <input type="text" placeholder="Write review" style={{borderRadius: "20px" ,borderStyle: "solid", borderWidth: "1px", borderColor: "#F0F0F0", height: "2.25rem",  textIndent: "1rem" , width: "70%"}}/>
        </label>
        <button style={{ borderRadius: "20px" ,fontSize: "1rem", width: "2.25rem",height: "2.25rem",margin: "0.625rem" , backgroundColor: "#4B95E9", border: "none", color: "#FFFFFF"}}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      </form>
    </div>
  )
}
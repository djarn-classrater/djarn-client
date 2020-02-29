import React , { useEffect, useState, useRef}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  return(
     <div style={{borderRadius: "20px", backgroundColor: "#F4F4F4"}}>
      <FontAwesomeIcon icon={faSearch} />  
     </div> 
  )
}
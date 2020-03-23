import React , { useEffect, useState, useRef}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  return(
     <div style={{border: 'solid'}}>
       <form >
         <input placeholder="Search" style={{border: 'none'}} />
         <FontAwesomeIcon icon={faSearch} style={{}} />
       </form>
     </div> 
  )
}
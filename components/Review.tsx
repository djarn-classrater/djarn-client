import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons' 

type Props = {
  name: string
  review: string
  date: string
  heart: boolean
}

export default ({ name, review, date, heart }: Props) =>{
  return (
  <>
    <div style={{
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    padding: '10px',
    borderRadius: '10px',
    height: 'auto',
    boxShadow: '0px 10px 25px #0000001A',
    // wordWrap:"break-word", //make long word new line
    wordBreak:"break-all"
    }}>
      <h6 style={{marginTop:'0rem'}}>{name}</h6>
      <h5 style={{marginTop:'-1.5rem'}}>{review}</h5>
      <div style={{display:'flex'}}>
      <h6 style={{flex:"1", marginTop:'-1rem',marginBottom:'-0.5rem',color: '#747474'}}>{date}</h6>
      <FontAwesomeIcon style={{flex:"2",marginTop:'-1rem', marginRight:'-9rem', color: heart == true ? 'red' : '#F2F2F2'}} icon={faHeart}/>
      </div>

    </div>
   </>
  )
  }
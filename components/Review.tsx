import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import StarRate from './StarRate'

type Props = {
  name: string
  review: string
  date: string
  heart: boolean
}

export default ({ name, review, date, heart }: Props) => {
  return (
    <>
      <div style={{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        padding: '1rem',
        borderRadius: '0.625rem',
        height: 'auto',
        boxShadow: '0px 10px 25px #0000001A',
        wordBreak: "break-all" //make long word new line
      }}>
        <div style={{ display: 'flex' }}>
          <p style={{ flex: "1", margin: 0, fontSize: '0.8rem' }}>{name}</p>
          <StarRate value={3}/>
        </div>
        <p style={{ margin: '0.25rem 0 0.75rem 0', fontWeight: 300 }}>{review}</p>
        <div style={{ display: 'flex' }}>
          <p style={{
            flex: "1", 
            margin: 0, 
            color: '#747474', 
            fontSize: '0.625rem' 
            }}>{date}</p>
          <FontAwesomeIcon style={{ 
            flex: 'none', 
            margin: 0, 
            color: heart == true ? '#DE8686' : 'lightgray'
            }} icon={faHeart} />
        </div>
      </div>
    </>
  )
}
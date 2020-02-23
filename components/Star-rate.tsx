import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface Props {
  value: 0 | 1 | 2 | 3 | 4 | 5 | null | undefined
}

export const StarRate: FunctionComponent<Props> = ({ value }) => {
  value = value || 0
  return (
    <>
      {Array(5).fill(null).map((_, idx) => {
        return <FontAwesomeIcon 
          icon={faStar} 
          color={idx < value ? '#FFDF74' : '#F2F2F2'}
        />
      })}
    </>
  )
}

export default StarRate
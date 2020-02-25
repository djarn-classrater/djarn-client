import React, { FunctionComponent, CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type RateProp = 0 | 1 | 2 | 3 | 4 | 5

interface Props {
  value?: RateProp
  starSize?: string | number
  starMargin?: string | number
  styleContainer?: CSSProperties
}

export const StarRate: FunctionComponent<Props> = (
  { value, starSize, starMargin, styleContainer }
) => {
  value = value || 0

  const style: Record<string, CSSProperties> = {
    container: {
      ...styleContainer,
      marginLeft: `-${starMargin}`
    },
    star: {
      width: starSize,
      height: starSize,
      marginLeft: starMargin,
    }
  }

  return (
    <div style={style.container}>
      {Array(5).fill(null).map((_, idx) => {
        return <FontAwesomeIcon 
          style={style.star}
          icon={faStar} 
          color={idx < value ? '#FFDF74' : '#F2F2F2'}
        />
      })}
    </div>
  )
}

export default StarRate
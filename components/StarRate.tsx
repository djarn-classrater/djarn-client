import React, { FunctionComponent, CSSProperties, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'

export type RateProp = 0 | 1 | 2 | 3 | 4 | 5

interface Props {
  value?: RateProp | number
  starSize?: string | number
  starMargin?: string | number
  styleContainer?: CSSProperties
  onClick?: (value: RateProp | number) => void
  loading?: boolean
}

export const StarRate: FunctionComponent<Props> = ({
  value,
  starSize = '1rem',
  starMargin = '0.25rem',
  styleContainer,
  onClick,
  loading,
}) => {
  value = value || 0

  const style: Record<string, CSSProperties> = {
    container: {
      ...styleContainer,
      marginLeft: `-${starMargin}`,
      display: 'flex',
    },
    star: {
      width: starSize,
      height: starSize,
      marginLeft: starMargin,
    },
  }

  return (
    <div style={style.container}>
      {Array(5)
        .fill(null)
        .map((_, idx: RateProp) => {
          return loading ? (
            <div style={style.star}>
              <Skeleton key={idx} width={starSize} height={starSize} circle />
            </div>
          ) : (
            <FontAwesomeIcon
              key={idx}
              style={style.star}
              icon={faStar}
              color={idx < value ? '#FFDF74' : '#F2F2F2'}
              onClick={
                onClick &&
                useCallback(() => onClick((idx + 1) as RateProp), [onClick])
              }
            />
          )
        })}
    </div>
  )
}

export default React.memo(StarRate, (prev, next) => prev.value == next.value)

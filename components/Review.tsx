import React, { FunctionComponent, CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import StarRate, { Rate } from './StarRate'
import Skeleton from 'react-loading-skeleton'
import { ReviewType } from '~/generated/graphql'

interface Props {
  name?: string
  heart?: boolean
  loading?: boolean
  style?: CSSProperties
  data?: Partial<ReviewType>
}

const Review: FunctionComponent<Props> = ({
  name,
  heart,
  loading,
  style,
  data = { context: null, date: null, rate: 0 },
}) => {
  const { context, date, rate } = data

  return (
    <>
      <div
        style={{
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          padding: '1rem',
          borderRadius: '0.625rem',
          height: 'auto',
          boxShadow: '0px 10px 25px #0000001A',
          wordBreak: 'break-all', //make long word new line
          ...style,
        }}
      >
        <div style={{ display: 'flex' }}>
          <p style={{ flex: '1', margin: 0, fontSize: '0.8rem' }}>
            {loading ? <Skeleton width={'8rem'} /> : name || 'Anonymous'}
          </p>
          <StarRate
            starSize={'1rem'}
            starMargin={'0.25rem'}
            intialRate={rate as Rate}
            loading={loading}
            readonly
          />
        </div>
        <p style={{ margin: '0.25rem 0 0.75rem 0', fontWeight: 300 }}>
          {loading ? <Skeleton count={2} /> : context}
        </p>
        <div style={{ display: 'flex' }}>
          <p
            style={{
              flex: '1',
              margin: 0,
              color: '#747474',
              fontSize: '0.625rem',
            }}
          >
            {loading ? <Skeleton width={'6rem'} /> : date}
          </p>
          {loading ? (
            <Skeleton circle width={'1rem'} height={'1rem'} />
          ) : (
            <FontAwesomeIcon
              style={{
                flex: 'none',
                margin: 0,
                color: heart == true ? '#DE8686' : 'lightgray',
              }}
              icon={faHeart}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Review

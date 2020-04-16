import React, { FunctionComponent, CSSProperties, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
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
  onLikeClick?(payload: Partial<ReviewType>): void
}

// Clickable size of like button
const LikeContainer = styled.div`
  padding: 2rem;
  margin: -2rem;
  display: flex;
`

const LikeCount = styled.p`
  margin: 0;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  font-weight: 300;
  color: #747474;
`

const Like = styled(FontAwesomeIcon)<{ heart: boolean }>`
  flex: none;
  margin: auto;
  color: ${({ heart }) => (heart ? '#DE8686' : 'lightgray')};
`

const Review = forwardRef<HTMLInputElement, Props>(
  ({
    name,
    heart,
    loading,
    style,
    data = { context: null, date: null, rate: 0 },
    onLikeClick,
  }) => {
    const { context, date, rate, likes } = data

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
              <LikeContainer onClick={() => onLikeClick && onLikeClick(data)}>
                <LikeCount>{likes}</LikeCount>
                <Like heart={heart} icon={faHeart} />
              </LikeContainer>
            )}
          </div>
        </div>
      </>
    )
  },
)

Review.displayName = 'Review'
export default Review

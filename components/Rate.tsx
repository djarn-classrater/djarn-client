import React, { FunctionComponent } from 'react'
import { Chart } from './Chart'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { RateSummary } from '~/generated/graphql'

interface Props extends RateSummary {
  loading?: boolean
}

const Container = styled.div`
  margin-bottom: 0.625rem;
`

export const Rate: FunctionComponent<Props> = ({
  loading,
  mean,
  reviewer,
  rating,
}) => {
  return (
    <Container>
      {loading ? (
        <Skeleton width={'9rem'} height={'1.25rem'} />
      ) : (
        <h3 style={{ margin: '0', fontWeight: 400 }}>Rate & Review </h3>
      )}
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center', flex: 'none' }}>
          <p
            style={{
              minWidth: '5.625rem',
              margin: '0 1rem 0 0.5rem',
              fontSize: '3.25rem',
              fontStyle: 'normal',
            }}
          >
            {loading ? (
              <Skeleton circle width={'3rem'} height={'3rem'} />
            ) : (
              (mean && mean.toFixed(2)) || 0
            )}
          </p>
          <p
            style={{
              marginTop: '-1rem',
              color: '#747474',
              fontSize: '0.875rem',
            }}
          >
            {loading ? <Skeleton width={'6rem'} /> : reviewer + ' reviewers'}
          </p>
        </div>
        <div style={{ flex: '2', marginTop: '1rem' }}>
          <Chart loading={loading} rating={rating} />
        </div>
      </div>
    </Container>
  )
}

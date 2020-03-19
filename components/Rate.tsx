import React, { FunctionComponent } from 'react'

import { Chart } from './Chart'
import Skeleton from 'react-loading-skeleton'

type Prop = {
  loading?: boolean
  mean?: string
  reviewer?: string
  rating?: object
}

export const Rate: FunctionComponent<Prop> = ({
  loading,
  mean,
  reviewer,
  rating,
}) => {
  return (
    <>
      {loading ? (
        <Skeleton width={'9rem'} height={'1.25rem'} />
      ) : (
        <h3 style={{ margin: '0' }}>Rate & Review </h3>
      )}
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center', flex: '1' }}>
          <p
            style={{
              margin: '1rem',
              marginBottom: '0',
              fontSize: '3.25rem',
              fontStyle: 'normal',
            }}
          >
            {loading ? (
              <Skeleton circle width={'3rem'} height={'3rem'} />
            ) : (
              mean
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
        <div style={{ flex: '2', marginTop: '2rem' }}>
          <Chart loading={loading} rating={rating} />
        </div>
      </div>
    </>
  )
}

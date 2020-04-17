import React, { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'

import { Rating } from '~/generated/graphql'

interface Props {
  loading?: boolean
  rating: Rating
}

type BarChartProps = {
  loading?: boolean
  color?: string
  loadingWidth?: string
  maxScore?: number
  score?: number
}

const BarChart: FunctionComponent<BarChartProps> = ({
  loading,
  color,
  loadingWidth,
  maxScore,
  score,
}) => {
  const barWidth = `${(score / maxScore) * 97 || 0 + 3}%`
  return (
    <div
      style={{
        // width: maxScore,
        height: '0.5rem',
        margin: '0.25rem',
      }}
    >
      {loading ? (
        <div style={{ position: 'absolute', marginTop: '-0.25rem' }}>
          <Skeleton width={loadingWidth} height={'0.5rem'} />
        </div>
      ) : (
        <div
          style={{ width: barWidth, backgroundColor: color, height: '100%' }}
        />
      )}
    </div>
  )
}

export const Chart: FunctionComponent<Props> = ({ loading, rating }) => {
  const maxScore =
    !loading &&
    Object.keys(rating).reduce<number>((prev, current) => {
      return rating[current] > prev ? rating[current] : prev
    }, 0)

  return (
    <div style={{ position: 'relative' }}>
      <BarChart
        maxScore={maxScore}
        score={rating && rating['_5']}
        color={'#8BC7A4'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating && rating['_4']}
        color={'#B7D690'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating && rating['_3']}
        color={'#F9D959'}
        // widthbarload={'10rem'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating && rating['_2']}
        color={'#F4B451'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating && rating['_1']}
        color={'#F09165'}
        loading={loading}
      />
    </div>
  )
}

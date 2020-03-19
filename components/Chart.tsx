import React, { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
  loading?: boolean
  rating?: object
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
  const barWidth = `${(score / maxScore) * 97 + 3}%`
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
  const maxScore = Object.keys(rating).reduce<number>((prev, current) => {
    return rating[current] > prev ? rating[current] : prev
  }, 0)

  return (
    <div style={{ position: 'relative' }}>
      <BarChart
        maxScore={maxScore}
        score={rating['_5']}
        color={'#8BC7A4'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating['_4']}
        color={'#B7D690'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating['_3']}
        color={'#F9D959'}
        // widthbarload={'10rem'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating['_2']}
        color={'#F4B451'}
        loading={loading}
      />
      <BarChart
        maxScore={maxScore}
        score={rating['_2']}
        color={'#F09165'}
        loading={loading}
      />
    </div>
  )
}

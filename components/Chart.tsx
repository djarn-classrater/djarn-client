import React, { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
  loading?: boolean
}

type BarChartProps = {
  loading?: boolean
  color?: string
  widthbarload?: string
  bar?: string
}

const BarChart: FunctionComponent<BarChartProps> = ({
  loading,
  color,
  widthbarload,
  bar,
}) => {
  return (
    <div
      style={{
        width: bar,
        height: '0.5rem',
        margin: '0.25rem',
      }}
    >
      {loading ? (
        <div style={{ position: 'absolute', marginTop: '-0.25rem' }}>
          <Skeleton width={widthbarload} height={'0.5rem'} />
        </div>
      ) : (
        <div style={{ backgroundColor: color, height: '100%' }} />
      )}
    </div>
  )
}

export const Chart: FunctionComponent<Props> = ({ loading }) => {
  return (
    <div style={{ position: 'relative' }}>
      <BarChart
        bar={'100%'}
        color={'#8BC7A4'}
        widthbarload={'14rem'}
        loading={loading}
      />
      <BarChart
        bar={'70%'}
        color={'#B7D690'}
        widthbarload={'10rem'}
        loading={loading}
      />
      <BarChart
        bar={'20%'}
        color={'#F9D959'}
        widthbarload={'5rem'}
        loading={loading}
      />
      <BarChart
        bar={'30%'}
        color={'#F4B451'}
        widthbarload={'6rem'}
        loading={loading}
      />
      <BarChart
        bar={'50%'}
        color={'#F09165'}
        widthbarload={'9rem'}
        loading={loading}
      />
    </div>
  )
}

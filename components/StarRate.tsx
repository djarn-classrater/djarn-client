import React, {
  CSSProperties,
  useCallback,
  useState,
  forwardRef,
  useEffect,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'

export type Rate = 0 | 1 | 2 | 3 | 4 | 5

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  intialRate?: Rate
  starSize?: string | number
  starMargin?: string | number
  styleContainer?: CSSProperties
  loading?: boolean
  readonly?: boolean
}

export const StarRate = forwardRef<HTMLInputElement, Props>(
  (
    {
      intialRate = 0,
      starSize = '1rem',
      starMargin = '0.25rem',
      styleContainer,
      loading,
      readonly,
      ...props
    },
    ref,
  ) => {
    const [rate, setRate] = useState(intialRate)

    useEffect(() => {
      // onChange(ref)
    }, [rate])

    const onClickCallback = useCallback(
      (rate: Rate) => {
        !readonly && setRate(rate)
      },
      [rate],
    )

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
          .map((_, idx: Rate) => {
            return loading ? (
              <div style={style.star}>
                <Skeleton key={idx} width={starSize} height={starSize} circle />
              </div>
            ) : (
              <FontAwesomeIcon
                key={idx}
                style={style.star}
                icon={faStar}
                color={idx < rate ? '#FFDF74' : '#F2F2F2'}
                onClick={() => onClickCallback((idx + 1) as Rate)}
              />
            )
          })}
        <input
          ref={ref}
          {...props}
          min={0}
          max={5}
          type="number"
          value={rate}
          hidden
          readOnly
        />
      </div>
    )
  },
)

StarRate.displayName = 'StarRate'

export default StarRate

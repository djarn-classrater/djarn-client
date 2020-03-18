import React, { CSSProperties, FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
  courseTerm?: string
  courseName: string
  courseId: string
  styles?: Styles
  loading?: boolean
}

type Styles = {
  contrainer?: CSSProperties
}

const Course: FunctionComponent<Props> = ({
  courseTerm,
  courseName,
  courseId,
  styles,
  loading,
}) => {
  return (
    <>
      <div style={styles && styles.contrainer}>
        <div
          style={{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            height: 'auto',
            display: 'flex',
          }}
        >
          <div style={{ flex: '1' }}>
            <p
              style={{
                margin: 0,
                fontSize: '0.625rem',
                fontWeight: 300,
                color: '#747070',
              }}
            >
              {loading ? <Skeleton width={'4rem'} /> : courseTerm}
            </p>
            <p
              style={{
                margin: '-0.25rem 0 0 0',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {loading ? <Skeleton width={'6rem'} /> : courseId}
            </p>
            <p
              style={{
                margin: '-0.4rem 0 0 0',
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#747070',
              }}
            >
              {loading ? <Skeleton width={'13rem'} /> : courseName}
            </p>
          </div>
          <div style={{ flex: 'none', margin: 'auto' }}>
            {loading ? (
              <Skeleton width={'4rem'} height={'1.5rem'} />
            ) : (
              <button
                type="button"
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '10rem',
                  margin: 'auto',
                  border: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  background: '#F2F2F2 0% 0% no-repeat padding-box',
                }}
              >
                Review
              </button>
            )}
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#E4E4E4',
            width: '100%',
            height: '0.1rem',
            margin: '0.5rem 0 0.5rem 0',
          }}
        />
      </div>
    </>
  )
}

export default Course

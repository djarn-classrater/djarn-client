import React, { FunctionComponent } from 'react'

type Props = {
  courseName: string
  courseId: string
  courseDescription: string
  courseLo: string
}

const CourseDetail: FunctionComponent<Props> = ({
  courseName,
  courseId,
  courseDescription,
  courseLo,
}) => {
  return (
    <div
      style={{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        padding: '0.7rem',
        height: 'auto',
        wordBreak: 'break-all',
      }}
    >
      <p style={{ fontSize: '1.5rem', margin: 0 }}>{courseName}</p>
      <p
        style={{ fontSize: '1rem', margin: '0 0 0.625rem 0', color: '#909090' }}
      >
        {courseId}
      </p>
      <p style={{ fontWeight: 300, margin: 0 }}>{courseDescription}</p>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            margin: '0.625rem 0 0 0',
            background: '#F4F4F4 0% 0% no-repeat padding-box',
            color: '#6C6868',
            padding: '0.25rem 0.75rem',
            borderRadius: '10rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.7rem' }}>{courseLo}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

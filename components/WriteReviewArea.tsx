import React, { FunctionComponent } from 'react'
// import { text } from '@fortawesome/fontawesome-svg-core'
// import { Form, TextArea } from 'react'

type Props = {
  height: string
}
const WriteReview: FunctionComponent<Props> = ({ height }) => (
  <form>
    <textarea
      placeholder="write your review..."
      style={{
        margin: 'auto',
        color: '#909090',
        fontWeight: 300,
        border: '#FFFFFF',
        textAlign: 'left',
        fontSize: '1rem',
        width: '100%',
        height: `${height}`,
        wordBreak: 'break-all',
        borderRadius: '0.9375rem',
        background: '#F8F8F8',
        opacity: 1,
        boxSizing: 'border-box',
        padding: '1rem',
        marginBottom: '2rem',
      }}
    ></textarea>
  </form>
)

export default WriteReview

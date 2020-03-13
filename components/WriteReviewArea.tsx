import React, { FunctionComponent } from 'react'
// import { text } from '@fortawesome/fontawesome-svg-core'
// import { Form, TextArea } from 'react'

type Props = {
  text: string
  top: string
  left: string
  width: string
  height: string
  background: string
  textcolor: string
}
const WriteReview: FunctionComponent<Props> = ({
  text,
  top,
  left,
  width,
  height,
  textcolor,
  background,
}) => (
  <form>
    <textarea
      placeholder={text}
      style={{
        margin: 'auto',
        // top: `${top}`,
        // left: `${left}`,
        color: `${textcolor}`,
        fontWeight: 300,
        border: '#FFFFFF',
        fontFamily: 'Helvetica Neue',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '1rem',
        width: '100%',
        height: `${height}`,
        wordBreak: 'break-all',
        borderRadius: '0.9375rem',
        background: `${background}`,
        opacity: 1,
      }}
    ></textarea>
  </form>
)

export default WriteReview

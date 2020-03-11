import React, { FunctionComponent } from 'react'

interface Props {
  text: string
}

const Button: FunctionComponent<Props> = ({ text }) => (
  <button style={{ color: 'red' }}>{text}</button>
)

export default Button

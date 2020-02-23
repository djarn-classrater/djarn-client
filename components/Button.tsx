import React from 'react'

type Props = {
  text: string
}

export default ({ text }: Props) =>(
  <button style={{ color: 'red' }}>{text}</button>
)

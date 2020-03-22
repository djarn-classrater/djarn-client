import React, { FunctionComponent } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const CreateButton: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: '#3B6FFF',
        border: 'none',
        color: '#FFFFFF',
        fontSize: '1rem',
        padding: '0.875rem 0',
        borderRadius: '25rem',
        width: '100%',
        fontWeight: 300,
        marginBottom: '1rem',
      }}
    >
      Create a review
    </button>
  )
}

export default CreateButton

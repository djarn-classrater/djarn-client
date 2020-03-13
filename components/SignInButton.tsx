import React, { forwardRef } from 'react'

type Props = {
  href?: string
  ButtonName: string
  ButtonColor: string
  textColor: string
  width: string
  flex: string
  size: string
}

const SignInButton = forwardRef<HTMLAnchorElement, Props>(
  ({ href, ButtonName, ButtonColor, textColor, width, flex, size }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        style={{
          flex: `${flex}`,
          borderRadius: '1.25rem',
          border: 'none',
          color: `${textColor}`,
          backgroundColor: `${ButtonColor}`,
          textDecoration: 'none',
          fontStyle: ' normal',
          width: `${width}`,
          fontWeight: 300,
          fontSize: `${size}`,
          padding: '0.75rem 0.75rem',
          cursor: 'pointer',
        }}
      >
        {ButtonName}
      </a>
    )
  },
)

SignInButton.displayName = 'SignInButton'

export default SignInButton

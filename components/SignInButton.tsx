import React, { forwardRef, CSSProperties } from 'react'

type Props = {
  href?: string
  ButtonName: string
  ButtonColor: string
  textColor: string
  width: string
  flex: string
  size: string
  style?: CSSProperties
}

const SignInButton = forwardRef<HTMLAnchorElement, Props>(
  (
    { href, ButtonName, ButtonColor, textColor, width, flex, size, style },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        style={{
          ...style,
          flex: `${flex}`,
          borderRadius: '1.625rem',
          border: 'none',
          color: `${textColor}`,
          backgroundColor: `${ButtonColor}`,
          textDecoration: 'none',
          fontStyle: ' normal',
          width: `${width}`,
          fontWeight: 300,
          fontSize: `${size}`,
          padding: '0.75rem 1.75rem',
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

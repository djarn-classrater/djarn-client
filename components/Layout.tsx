import React, { FunctionComponent } from 'react'

interface Props {
  children: any
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <div style={{ maxWidth: '32rem', margin: 'auto' }}>{children}</div>
)

export default Layout

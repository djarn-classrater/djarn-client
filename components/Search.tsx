import React, { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div style={{ display: 'flex' }}>
      <h1 style={{ flex: 'none', margin: 0, color: '#114EF5' }}>D</h1>
      <div style={{ flex: 1 }}>
        <div
          style={{
            margin: '0.375rem',
            display: 'flex',
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#F0F0F0',
          }}
        >
          <div style={{ flex: 1 }}>
            <input
              {...props}
              ref={ref}
              type="text"
              placeholder="Search"
              style={{
                borderRadius: '20px',
                height: '2rem',
                textIndent: '1rem',
                width: '100%',
                border: 'none',
              }}
            />
          </div>
          <div style={{ flex: 'none' }}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                paddingTop: '0.625rem',
                paddingRight: '1rem',
                textAlign: 'center',
                color: '#6C6868',
                width: '1rem',
                height: '1rem',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})
Search.displayName = 'Search'

export default Search

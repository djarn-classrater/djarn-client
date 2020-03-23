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
      <div style={{ flex: 1, padding: '0.375rem' }}>
        <p style={{ display: 'block', position: 'relative', margin: 0 }}>
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
              border: '1px solid #E4E4E4',
              position: 'relative',
            }}
          />
          <span
            style={{
              alignItems: 'center',
              display: 'inline-flex',
              right: 0,
              position: 'absolute',
              zIndex: 4,
              width: '2rem',
              top: 0,
              fontSize: 'inherit',
              height: '2rem',
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                display: 'inline-block',
                boxSizing: 'inherit',
                color: '#6C6868',
              }}
            />
          </span>
        </p>
      </div>
    </div>
  )
})
Search.displayName = 'Search'

export default Search

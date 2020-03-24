import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Contrainer = styled.div`
  display: flex;
`

const Logo = styled.h1`
  flex: none;
  margin: 0 0.25rem;
  color: #114ef5;
`

const SearchContrainer = styled.div`
  flex: 1;
  margin: 0.375rem;
  position: relative;
`

const SearchInput = styled.input`
  border-radius: 1.25rem;
  height: 2rem;
  text-indent: 1rem;
  width: 100%;
  border: 2px solid #f5f5f5;
  position: relative;
`

const SearchSpan = styled.span`
  align-items: center;
  display: inline-flex;
  top: 0;
  right: 1rem;
  height: 100%;
  position: absolute;
  z-index: 4;
  font-size: inherit;
`

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  box-sizing: inherit;
  color: #6c6868;
`

const Search = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <Contrainer>
      <Logo>D</Logo>
      <SearchContrainer>
        {/* <p style={{ display: 'block', position: 'relative', margin: 0 }}> */}
        <SearchInput {...props} ref={ref} type="text" placeholder="Search" />
        <SearchSpan>
          <Icon icon={faSearch} />
        </SearchSpan>
        {/* </p> */}
      </SearchContrainer>
    </Contrainer>
  )
})

Search.displayName = 'Search'

export default Search

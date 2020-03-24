import React, { forwardRef, useRef, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Contrainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Logo = styled.h1`
  flex: none;
  margin: 0 0.25rem;
  color: #114ef5;
  align-self: center;
`

const SearchContrainer = styled.div`
  flex: 1;
  margin: 0 0.25rem;
  position: relative;
`

const SearchInput = styled.input`
  border-radius: 1.25rem;
  height: 2rem;
  text-indent: 1rem;
  float: right;
  border: 2px solid #f5f5f5;
  position: relative;
  transition: width 0.15s ease-in-out;

  width: ${(props: { active: boolean }) => (props.active ? '100%' : '2.25rem')};
`

const SearchSpan = styled.a`
  align-items: center;
  justify-content: center;
  display: inline-flex;
  top: 0;
  right: 0;
  width: 2.375rem;
  height: 100%;
  position: absolute;
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
  const [active, setActive] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>()
  // Bypass ref
  ref = inputRef

  return (
    <Contrainer>
      <Logo>D</Logo>
      <SearchContrainer>
        <SearchInput
          {...props}
          onBlur={e => {
            setActive(!!e.target.value)
          }}
          ref={inputRef}
          type="text"
          width={'2.25rem'}
          active={active}
        />
        <SearchSpan
          onClick={() => {
            inputRef.current.focus()
            setActive(true)
          }}
        >
          <Icon icon={faSearch} />
        </SearchSpan>
      </SearchContrainer>
    </Contrainer>
  )
})

Search.displayName = 'Search'

export default Search

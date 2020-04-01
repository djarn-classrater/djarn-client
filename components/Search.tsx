import React, { FC, forwardRef, useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Contrainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const SearchContrainer = styled.div`
  flex: 1;
  margin: 0 0.25rem;
  position: relative;
`

const SearchInput = styled.input<{ active: boolean }>`
  height: 2.5rem;
  text-indent: 1rem;
  float: right;
  box-shadow: inset 0 0.0625em 0.125em #ffffff;
  border-radius: 1.25rem;
  border: 2px solid transparent;
  border-color: #f5f5f5;
  position: relative;
  transition: width 0.15s ease-out;

  width: ${({ active }) => (active ? '100%' : '2.5rem')};
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

const LogoContainer = styled.div`
  display: flex;
`

const LogoText = styled.h1<{ hidden?: boolean }>`
  flex: none;
  margin: 0 0.25rem;
  color: #114ef5;
  align-self: center;
  transition: opacity 0.15s east-out;
  opacity: ${({ hidden }) => (hidden ? 0 : 100)};
`

const Logo: FC<{ searchActive: boolean }> = ({ searchActive }) => {
  return (
    <LogoContainer>
      <LogoText>D</LogoText>
      <LogoText hidden={searchActive}>JARN</LogoText>
    </LogoContainer>
  )
}

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCancelClick?(): void
  onSearchClick?(): void
}

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ onCancelClick, onSearchClick, ...props }, ref) => {
    const [active, setActive] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>()
    // Bypass ref
    ref = inputRef

    return (
      <Contrainer>
        <Logo searchActive={active} />
        <SearchContrainer>
          <SearchInput
            {...props}
            ref={inputRef}
            type="text"
            width={'2.25rem'}
            active={active}
          />
          {active ? (
            <SearchSpan
              onClick={() => {
                inputRef.current.value = ''
                setActive(false)
                onCancelClick && onCancelClick()
              }}
            >
              <Icon icon={faTimes} />
            </SearchSpan>
          ) : (
            <SearchSpan
              onClick={() => {
                inputRef.current.focus()
                setActive(true)
                onSearchClick && onSearchClick()
              }}
            >
              <Icon icon={faSearch} />
            </SearchSpan>
          )}
        </SearchContrainer>
      </Contrainer>
    )
  },
)

Search.displayName = 'Search'

export default Search

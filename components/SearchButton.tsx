import React,{FunctionComponent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchButton:FunctionComponent =() =>(
    <button type="submit" 
             style ={{
                 borderRadius:'50%',
                 width:'1.9375rem',
                 height: '1.875rem',
                 border: 'none',
                 background:' #F4F4F4 0% 0% no-repeat padding-box'
             }}>
                 <FontAwesomeIcon icon={faSearch} /></button>
)

export default SearchButton

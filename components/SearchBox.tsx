import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { transform } from '@babel/core'

const SearchBox: FunctionComponent = () => (
    <form >
        <label>

            <input type="text" name="name"
                style={{
                    margin: 'auto',
                    width: '80%',
                    height: '1.875rem',
                    borderRadius: '1.25rem',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    wordBreak: 'break-all',
                    boxSizing: 'border-box',
                    border: '1px solid #E4E4E4',
                    alignItems: 'center',
                    position:'absolute',
                   
                }}
            />
            
            <button type="submit" 
             style ={{
                 borderRadius:'50%',
                 border: 'none',
                 background:' none',
                 position:'absolute',
                 color:'#6C6868',
                 flex:'none',
                 width:'0.909375rem',
                 height:'0.90375rem',
                 paddingLeft:'73%',
                 paddingTop:'0.5rem',
                 cursor:'pointer'


             }}>
                 <FontAwesomeIcon icon={faSearch}/></button>
        </label>

    </form>
)
export default SearchBox
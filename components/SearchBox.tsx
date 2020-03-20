import React, { FunctionComponent } from 'react'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons'

const SearchBox: FunctionComponent = () => (
    <form >
        <label>
            <input type="text" name="name" 
                style ={{
                    margin:'auto',
                    width: '80%',
                    height: '1.875rem',
                    borderRadius:'1.25rem',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    wordBreak: 'break-all',
                    boxSizing: 'border-box',
                    border: '1px solid #E4E4E4',
                    alignItems:'center'
                }}/>
               
        </label>
        
    </form>
)
export default SearchBox
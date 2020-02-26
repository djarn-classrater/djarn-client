import React, { FunctionComponent, CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const PencilButton= () => {
    return (
        <>
        <div style={{background: '#2B4BE6',
                    borderRadius: '50px',
                    padding:'15px',
                    width: '15px',
                    height: '15px'}}>
            <div style={{marginTop:'-3px'}}>
            <FontAwesomeIcon 
            icon={faPencilAlt} 
            color={'#FFFFFF'} 
            />
            </div>
        </div>
        
        
        </>
    )
  }
    
export default PencilButton
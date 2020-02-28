import React from 'react'

type Props = {
    courseName: string
    courseId: string
}

export default({courseName,courseId}: Props) =>{
    return(
        <>
        <div style = {{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            padding: '0.7rem',
            height: 'auto',
            display: 'flex'
        }}>
            <div style = {{flex: '1'}}>
                <h4 style={{margin:0}}>{courseId}</h4>
                <p style={{margin:0 ,color:'#747070' ,fontSize:'0.9rem'}}>{courseName}</p>
            </div>
            <div style = {{flex: 'none',margin:'auto'}}>
                <button type = 'button' 
                style={{
                borderRadius: '10px',
                border: '#FFFFFF',
                background: '#F2F2F2'}}>Review</button>
            </div>
                

        </div>
        <hr style={{margin:0}}></hr>
        </>
    ) 
}
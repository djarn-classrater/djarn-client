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
                <h4 style={{marginTop: '0rem'}}>{courseId}</h4>
                <p style={{marginTop: '-1.5rem' ,color:'#747070' ,fontSize:'0.9rem'}}>{courseName}</p>
            </div>
                <button style={{marginTop: '0.7rem',
                marginBottom: '2rem',
                borderRadius: '10px',
                border: '#FFFFFF',
                background: '#F2F2F2'}}>Review</button>

        </div>
        <hr style={{marginTop: '-1rem'}}></hr>
        </>
    ) 
}
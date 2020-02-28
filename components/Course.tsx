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
                <p style={{margin:0,fontSize:'1rem',fontWeight:500}}>{courseId}</p>
                <p style={{margin:0 ,color:'#747070' ,fontSize:'0.875rem',fontWeight:300}}>{courseName}</p>
            </div>
            <div style = {{flex: 'none',margin:'auto'}}>
                <button type = 'button' 
                style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '10rem',
                margin:'auto',
                border: '#FFFFFF',
                fontSize:'0.75rem',
                fontWeight:300,
                background: '#F2F2F2 0% 0% no-repeat padding-box'}}>Review</button>
            </div>
                

        </div>
        <hr style={{margin:0}}></hr>
        </>
    ) 
}
import React from 'react'

type Props = {
    courseName: string
    courseId: string
    courseInfo: string
    courseLo: string
}

export default({courseName,courseId,courseInfo,courseLo}: Props) =>{
    return(
        <div style = {{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            padding: '0.7rem',
            height: 'auto',
            wordBreak: 'break-all'
        }}>
            <h4 style={{marginTop: '0rem'}}>{courseName}</h4>
            <h5 style={{marginTop: '-1.5rem' ,color:'#909090'}}>{courseId}</h5>
            <h6 style={{marginTop: '-1rem' ,marginBottom: '-0.5rem'}}>{courseInfo}</h6>
            <div style = {{
                marginTop: '0.5rem',
                background: '#F4F4F4 0% 0% no-repeat padding-box',
                color: '#6C6868',
                padding: '10px',
                borderRadius: '30px',
                width: '35px',
                height: '10px'
            }}>
                <h6 style={{marginTop:'-0.25rem'}}>{courseLo}</h6>
            </div>
        </div>
    ) 
}
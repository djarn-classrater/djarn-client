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
            <p style={{fontSize:'1.5rem',margin:0}}>{courseName}</p>
            <p style={{fontSize:'1rem',margin:0 ,color:'#909090'}}>{courseId}</p>
            <p style={{fontSize:'0.8rem',margin:0}}>{courseInfo}</p>
            <div style={{display:'flex'}}>
                <div style = {{
                    margin:'0.25rem 0rem',
                    background: '#F4F4F4 0% 0% no-repeat padding-box',
                    color: '#6C6868',
                    padding: '0.5rem',
                    borderRadius: '10rem',
                }}>
                    <p style={{margin:0,fontSize:'0.7rem'}}>{courseLo}</p>
                </div>
            </div>
        </div>
    ) 
}
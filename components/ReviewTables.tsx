import React from "react";
import Course from '../components/Course';



export const ReviewTables = () => {
  return (
   <div style={{
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    padding: '0.5rem',
    margin: '0 0.5rem',
    borderRadius: '0.625rem',
    height: 'auto',
    boxShadow: '0 1rem 1rem #0000001A',
   }}
   >
     <div style={{padding:'0 1rem'}}>
       <p style={{fontSize:'1.25rem', fontWeight:500,marginBottom:'0.25rem'}}>Review your course</p>  
     </div>
        <Course   courseTerm = {'2/2562'}
        courseName = {'Computer Engineering'} 
        courseId = {'261000'} />
        <Course   courseTerm = {'2/2562'}
        courseName = {'Computer Engineering'} 
        courseId = {'261000'} />
        <Course   courseTerm = {'2/2562'}
        courseName = {'Computer Engineering'} 
        courseId = {'261000'} />
        <Course   courseTerm = {'2/2562'}
        courseName = {'Computer Engineering'} 
        courseId = {'261000'} />
        
   </div>
  );
};
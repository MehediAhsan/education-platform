import React from 'react'

const CoursePage =  async({params: {id}}) => {
    
  async function fetchCourse(){
    const response = await fetch(`http://localhost:3000/api/courses/${id}`)
    const course = await response.json();
    return course;
    }
  const {course} = await fetchCourse();
  const {title} = course;
    
  return (
    <div>CoursePage{title}</div>
  )
}


export default CoursePage
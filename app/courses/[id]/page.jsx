'use client'
import React from 'react'
 
import { useRouter } from 'next/navigation'
// async function fetchCourse(){
//     const response = await fetch(`http://localhost:3000/api/courses/${id}`)
//     const course = await response.json();
//     return course;
// }

const CoursePage =  () => {
    // const course = await fetchCourse();
    const router = useRouter()
 
  return (
    <div>CoursePage{router.query.id}</div>
  )
}

export default CoursePage
import React from 'react'

const CoursePage =  async({params: {id}}) => {
    
  async function fetchCourse(){
    const response = await fetch(`http://localhost:3000/api/courses/${id}`)
    const course = await response.json();
    return course;
    }
  const {course} = await fetchCourse();
  const {title, description, image} = course;
    
  return (
    <div className='flex justify-between p-20'>
        <div >
          <img className='h-96' src={image} alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-semibold mb-8'>{title}</h1>
          <p>{description}</p>
          <div className='flex justify-end items-end'>
            <button className='bg-blue-500 hover:bg-blue-600 p-2 rounded mt-20'>Enroll Now</button>
          </div>
        </div>

    </div>
  )
}


export default CoursePage
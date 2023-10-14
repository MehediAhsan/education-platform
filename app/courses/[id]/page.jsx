import React from 'react'
async function fetchCourse(id){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses/${id}`)
  const course = await response.json();
  return course;
  }
const CoursePage =  async({params: {id}}) => {
    
  
  const course = await fetchCourse(id);

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
            <button className='bg-gray-500 hover:bg-gray-600 p-2 rounded mt-20'>Enroll</button>
          </div>
        </div>

    </div>
  )
}


export default CoursePage
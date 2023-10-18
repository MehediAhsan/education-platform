import React from 'react'

const ChooseEduConnect = () => {
  const instructors = [
    {
      img: 'https://images.unsplash.com/photo-1556775865-b9a2234f9c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Expert Instructors',
      descriptiop: 'Learn from industry experts and experienced educators in your field of interest.'
    },
    {
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Interactive Learning',
      descriptiop: 'Engage in interactive quizzes, assignments, and discussions to reinforce your learning.'
    },
    {
      img: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Flexible Schedule',
      descriptiop: 'Learn at your own pace with our on-demand courses, fitting your busy lifestyle.'
    }
  ]
  return (
    <section className=" text-white py-16 rounded-lg text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-20">
            Why Choose EduConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {
              instructors.map((instructor, index) => <div key={index} className="flex flex-col items-center transition duration-300 transform hover:scale-105 cursor-pointer shadow-lg shadow-teal-400 p-4 rounded-xl">
              <img
                src={instructor.img}
                alt="Expert Instructors"
                className="w-20 h-20 mb-4 rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {instructor.name}
              </h3>
              <p className="text-gray-300">
                {instructor.descriptiop}
              </p>
            </div>)
            }
          </div>
        </section>
  )
}

export default ChooseEduConnect
import React from 'react'

const ChooseEduConnect = () => {
  return (
    <section className="border text-white py-16 rounded-lg text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
            Why Choose EduConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center transition duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1556775865-b9a2234f9c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Expert Instructors"
                className="w-16 h-16 mb-4 rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Expert Instructors
              </h3>
              <p className="text-gray-300">
                Learn from industry experts and experienced educators in your field of
                interest.
              </p>
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-0 transition duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Interactive Learning"
                className="w-16 h-16 mb-4 rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-300">
                Engage in interactive quizzes, assignments, and discussions to reinforce
                your learning.
              </p>
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-0 transition duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Flexible Schedule"
                className="w-16 h-16 mb-4 rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Flexible Schedule
              </h3>
              <p className="text-gray-300">
                Learn at your own pace with our on-demand courses, fitting your busy
                lifestyle.
              </p>
            </div>
            {/* ... Add more features ... */}
          </div>
        </section>
  )
}

export default ChooseEduConnect
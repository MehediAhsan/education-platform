import React from 'react'

const CoursesPage = () => {
    const courses = [
        {
          title: 'Web Development Bootcamp',
          description: 'Comprehensive program to become a front-end and back-end developer.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Data Science Masterclass',
          description: 'Uncover insights and make data-driven decisions.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Graphic Design Essentials',
          description: 'Learn visual communication and design principles.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        // Add more courses
      ];
  return (
    <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-center">
          Explore Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CoursesPage
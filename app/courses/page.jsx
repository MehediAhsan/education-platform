'use client';
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';

async function fetchCourses(){
  const response = await fetch("http://localhost:3000/api/courses")
  const courses = await response.json();
  return courses;
}

const CoursesPage = async () => {
    
      const [searchTerm, setSearchTerm] = useState('');

      const courses = await fetchCourses();
      console.log(courses);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-center">
          Explore Our Courses
        </h1>
        <div className="flex justify-center">
        <div className="mb-8 flex justify-center items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-96 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 pl-10 text-black"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
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
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No courses found matching your search.
            </p>
          )}
        </div>
      </div>
  )
}

export default CoursesPage

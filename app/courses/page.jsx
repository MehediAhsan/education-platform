// 'use client';
// import { useState } from "react";
// import { FaSearch } from 'react-icons/fa';
import Link from "next/link";

async function fetchCourses(){
  const response = await fetch("http://127.0.0.1:3000/api/courses")
  const courses = await response.json();
  return courses;
}

const CoursesPage = async () => {
    
      // const [searchTerm, setSearchTerm] = useState('');

      const courses = await fetchCourses();
      // console.log(courses);

  // const filteredCourses = courses.filter(course =>
  //   course.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-center">
        Explore Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link href={`/courses/${course.id}`} legacyBehavior>
                <a className="bg-gray-500 hover:bg-gray-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage

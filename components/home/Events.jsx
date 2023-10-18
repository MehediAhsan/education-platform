import React from 'react'

const Events = () => {
  return (
    <div className="py-16">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-14">Upcoming Events and Webinars</h2>
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className=" p-6 rounded-lg shadow-md shadow-teal-100 skew-y-2 hover:skew-y-0 transition duration-500 transform cursor-pointer">
        <h3 className="text-2xl font-semibold text-teal-500 mb-4">Event Title 1</h3>
        <p className="text-gray-200 mb-2">Date: September 15, 2023</p>
        <p className="text-gray-200 mb-2">Guest Speaker: John Doe</p>
        <p className="text-gray-200 mb-4">Topic: The Future of Technology</p>
        <a href="#" className=" bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now</a>
      </div>

      <div className=" p-6 rounded-lg shadow-md shadow-teal-100 skew-y-2 hover:skew-y-0 transition duration-500 transform cursor-pointer">
        <h3 className="text-2xl font-semibold text-teal-500 mb-4">Event Title 2</h3>
        <p className="text-gray-200 mb-2">Date: September 25, 2023</p>
        <p className="text-gray-200 mb-2">Guest Speaker: Jane Smith</p>
        <p className="text-gray-200 mb-4">Topic: Effective Study Techniques</p>
        <a href="#" className=" bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now</a>
      </div>

      <div className=" p-6 rounded-lg shadow-md shadow-teal-100 skew-y-2 hover:skew-y-0 transition duration-500 transform cursor-pointer">
        <h3 className="text-2xl font-semibold text-teal-500 mb-4">Event Title 3</h3>
        <p className="text-gray-200 mb-2">Date: October 5, 2023</p>
        <p className="text-gray-200 mb-2">Guest Speaker: Emily Johnson</p>
        <p className="text-gray-200 mb-4">Topic: Entrepreneurship 101</p>
        <a href="#" className=" bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Events
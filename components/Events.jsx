import React from 'react'

const Events = () => {
  return (
    <div class="py-16">
  <div class="container mx-auto">
    <h2 class="text-3xl font-semibold text-white text-center mb-8">Upcoming Events and Webinars</h2>
    
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Event Title 1</h3>
        <p class="text-gray-600 mb-2">Date: September 15, 2023</p>
        <p class="text-gray-600 mb-2">Guest Speaker: John Doe</p>
        <p class="text-gray-700 mb-4">Topic: The Future of Technology</p>
        <a href="#" class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now</a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Event Title 2</h3>
        <p class="text-gray-600 mb-2">Date: September 25, 2023</p>
        <p class="text-gray-600 mb-2">Guest Speaker: Jane Smith</p>
        <p class="text-gray-700 mb-4">Topic: Effective Study Techniques</p>
        <a href="#" class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now</a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Event Title 3</h3>
        <p class="text-gray-600 mb-2">Date: October 5, 2023</p>
        <p class="text-gray-600 mb-2">Guest Speaker: Emily Johnson</p>
        <p class="text-gray-700 mb-4">Topic: Entrepreneurship 101</p>
        <a href="#" class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Events
import React from 'react'

const UpcomingEvents = () => {
  return (
    <div className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-14 text-center">Upcoming Events and Webinars</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event 1" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Title 1</h3>
          <p className="text-gray-600 mb-4">Date: September 20, 2023</p>
          <p className="text-gray-700 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="block text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event 2" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Title 2</h3>
          <p className="text-gray-600 mb-4">Date: October 5, 2023</p>
          <p className="text-gray-700 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="block text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event 3" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Title 3</h3>
          <p className="text-gray-600 mb-4">Date: November 15, 2023</p>
          <p className="text-gray-700 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="block text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default UpcomingEvents
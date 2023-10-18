import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StudentsSay = () => {
  return (
    <section className=" shadow-md rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-white text-center">
            What Our Students Say
          </h2>
          <Carousel
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={5000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            className="relative"
          >
            <div className="bg-teal-100 p-6 rounded-lg text-center w-96 mx-auto mb-14">
              <p className="text-gray-700 text-lg md:text-xl">
                "EduConnect has transformed the way I learn. The courses are comprehensive, and the instructors are amazing!"
              </p>
              <div className='flex justify-center items-center'>
              <div className="mt-6 w-48 h-48 pb-52">
                <img
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80"
                  alt="Student"
                  className="mx-auto rounded"
                />
                <p className="text-gray-600 font-semibold text-lg mt-2">
                  Jane Doe
                </p>
                <p className="text-gray-500">Business Analyst</p>
              </div>
              </div>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg text-center w-96 mx-auto mb-14">
              <p className="text-gray-700 text-lg md:text-xl">
                "I've taken several courses on EduConnect, and each one has been a valuable learning experience. Highly recommended!"
              </p>
              <div className='flex justify-center items-certer'>
              <div className="mt-6 w-48 h-48 pb-52">
                <img
                  src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Student"
                  className=" mx-auto rounded"
                />
                <p className="text-gray-600 font-semibold text-lg mt-2">
                  John Smith
                </p>
                <p className="text-gray-500">Software Engineer</p>
              </div>
              </div>
            </div>
          </Carousel>
        </section>
  )
}

export default StudentsSay
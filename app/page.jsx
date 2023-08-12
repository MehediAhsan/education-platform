'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HomePage = () => {
  const bannerSlides = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Unlock Your Potential',
      description: 'Elevate your skills with our online courses.',
    },
    {
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Diverse Course Selection',
      description: 'Expand your knowledge in various fields.',
    },
    {
      image: 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Flexible Learning',
      description: 'Learn at your own pace, anytime, anywhere.',
    },
  ];

  const featuredCourses = [
    {
      title: 'Web Development Bootcamp',
      description: 'Comprehensive program to become a front-end and back-end developer.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Data Science Masterclass',
      description: 'Uncover insights and make data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Graphic Design Essentials',
      description: 'Learn visual communication and design principles.',
      image: 'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    },
  ];
  return (
    <div>
      
      <div>
      <div className="relative">
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
          {bannerSlides.map((slide, index) => (
            <div className='h-screen' key={index}>
              <img src={slide.image} alt={`Slide ${index}`} />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-lg mx-auto mb-6 text-center">
                  {slide.description}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg transition duration-300">
                  Explore Courses
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-600">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <main className="container mx-auto py-12">
        

      <section className="bg-gray-800 text-white py-16 rounded-lg text-center mb-20">
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

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg">
              <p className="text-gray-700">
                "EduConnect has transformed the way I learn. The courses are comprehensive, and the instructors are amazing!"
              </p>
              <div className="flex items-center mt-4">
                <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-600 font-semibold">Jane Doe</p>
                  <p className="text-gray-500">Business Analyst</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <p className="text-gray-700">
                "I've taken several courses on EduConnect, and each one has been a valuable learning experience. Highly recommended!"
              </p>
              <div className="flex items-center mt-4">
                <img src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-600 font-semibold">John Smith</p>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
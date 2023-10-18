
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const FeaturedCourses = () => {
    
  const featuredCourses = [
    {
      title: 'Web Development Bootcamp',
      description: 'Comprehensive program to become a front-end ',
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
    <section className="py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-1 text-center">
          Featured Courses
        </h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {featuredCourses.map((course, index) => (
            <SwiperSlide key={index} className="shadow-md p-6 rounded-lg h-full border-2 border-teal-500 bg-slate-950 cursor-pointer my-14">
              <img src={course.image} alt={course.title} className="w-full block h-48 object-cover mb-4 rounded-lg skew-y-3 transform transition duration-300 hover:skew-y-0" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">{course.title}</h3>
              <p className="text-gray-200 mb-4">{course.description}</p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300 -skew-y-3 transform">
                Learn More
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
  )
}

export default FeaturedCourses
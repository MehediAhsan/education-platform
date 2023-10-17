'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from "next/link"
import Events from "../components/Events";
import PartnersSection from "../components/PartnersSection";
import InstructorProfiles from "../components/InstructorProfiles";
import Infographics from "../components/Infographics";
import InteractiveLearningToolsSection from "../components/InteractiveLearningToolsSection";
import UpcomingEvents from "../components/UpcomingEvents";
import CountdownSection from "../components/CountdownSection";
import Banner from "@/components/Banner";
import FeaturedCourses from '@/components/FeaturedCourses';
import ChooseEduConnect from '@/components/ChooseEduConnect';

const HomePage = () => {
  

  const trainers = [
    {
      id:'1',
      name: 'Rakibul',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'2',
      name: 'Robiul',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'3',
      name: 'Ataur',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'4',
      name: 'Salman',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'5',
      name: 'Pial',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'6',
      name: 'Rakibul',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'7',
      name: 'Rakibul',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
    {
      id:'8',
      name: 'Rakibul',
      img: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      spacalist:'Data manager'
    },
  ]
  return (
    <div>
      <Banner></Banner>    
      <FeaturedCourses></FeaturedCourses>
      
      <main className="container mx-auto py-12">
        
        <ChooseEduConnect></ChooseEduConnect>

                <Events></Events>

        <PartnersSection></PartnersSection>

    <div className="container mx-auto py-12">
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-gray-800 text-center">
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
            <div className="bg-gray-100 p-6 rounded-lg text-center  w-96 mx-auto">
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
            <div className="bg-gray-100 p-6 rounded-lg text-center w-96 mx-auto">
              <p className="text-gray-700 text-lg md:text-xl">
                "I've taken several courses on EduConnect, and each one has been a valuable learning experience. Highly recommended!"
              </p>
              <div className='flex justify-center items-certer'>
              <div className="mt-6 w-48 h-48  pb-52">
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
      </div>

      <InstructorProfiles></InstructorProfiles>

      <Infographics></Infographics>

      <CountdownSection></CountdownSection>

      <InteractiveLearningToolsSection></InteractiveLearningToolsSection>

      <UpcomingEvents></UpcomingEvents>
      </main>
    </div>
  )
}

export default HomePage
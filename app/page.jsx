'use client';
import Events from "../components/home/Events";
import PartnersSection from "../components/home/PartnersSection";
import InstructorProfiles from "../components/home/InstructorProfiles";
import Infographics from "../components/home/Infographics";
import InteractiveLearningToolsSection from "../components/home/InteractiveLearningToolsSection";
import UpcomingEvents from "../components/home/UpcomingEvents";
import CountdownSection from "../components/home/CountdownSection";
import Banner from "@/components/home/Banner";
import FeaturedCourses from '@/components/home/FeaturedCourses';
import ChooseEduConnect from '@/components/home/ChooseEduConnect';
import StudentsSay from '@/components/home/StudentsSay';

const HomePage = () => {
  
  return (
    <div>

      <Banner></Banner>

      <FeaturedCourses></FeaturedCourses>
        
      <ChooseEduConnect></ChooseEduConnect>

      <Events></Events>

      <PartnersSection></PartnersSection>

      <StudentsSay></StudentsSay>

      <InstructorProfiles></InstructorProfiles>

      <Infographics></Infographics>

      <CountdownSection></CountdownSection>

      <InteractiveLearningToolsSection></InteractiveLearningToolsSection>

      <UpcomingEvents></UpcomingEvents>
      
    </div>
  )
}

export default HomePage
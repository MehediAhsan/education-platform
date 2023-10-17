'use client';
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
import StudentsSay from '@/components/StudentsSay';

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
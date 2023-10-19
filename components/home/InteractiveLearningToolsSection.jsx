import React from 'react';
import { FaGamepad, FaFlask, FaRobot } from 'react-icons/fa';

const InteractiveLearningToolsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-14">
          Interactive Learning Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tool 1: Gamified Quizzes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <FaGamepad className="text-4xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Gamified Quizzes
            </h3>
            <p className="text-gray-600">
              Engage students with fun and educational quizzes designed to make learning enjoyable.
            </p>
          </div>

          {/* Tool 2: Virtual Labs */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <FaFlask className="text-4xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Virtual Labs
            </h3>
            <p className="text-gray-600">
              Explore and experiment in virtual labs, providing hands-on learning experiences online.
            </p>
          </div>

          {/* Tool 3: AI-powered Tutors */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <FaRobot className="text-4xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              AI-powered Tutors
            </h3>
            <p className="text-gray-600">
              Get personalized support and guidance from AI tutors tailored to your learning needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLearningToolsSection;

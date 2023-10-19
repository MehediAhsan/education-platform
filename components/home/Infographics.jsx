import React from 'react';
import { FaBook, FaSmile, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa';

const Infographics = () => {
  const infographicData = [
    {
      title: 'Courses Offered',
      value: '1000+',
      icon: <FaBook size={64} />,
      color: 'text-blue-500',
    },
    {
      title: 'Happy Students',
      value: '10,000+',
      icon: <FaSmile size={64} />,
      color: 'text-green-500',
    },
    {
      title: 'Certified Instructors',
      value: '500+',
      icon: <FaChalkboardTeacher size={64} />,
      color: 'text-purple-500',
    },
    {
      title: 'Countries Served',
      value: '50+',
      icon: <FaGlobe size={64} />,
      color: 'text-yellow-500',
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infographicData.map((item, index) => (
            <div
              key={index}
              className="p-4  rounded-lg shadow-lg flex flex-col gap-3 items-center"
            >
              <span className='text-teal-500'>{item.icon}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infographics;

// components/InstructorProfiles.js

import React from 'react';

const InstructorProfiles = () => {
  const instructors = [
    {
      name: 'John Doe',
      credentials: 'Ph.D. in Mathematics',
      bio: 'John is a passionate educator with over 10 years of experience in teaching mathematics.',
      imageSrc: 'https://media.licdn.com/dms/image/C5603AQEZRRyun4ZGCA/profile-displayphoto-shrink_800_800/0/1655800643268?e=2147483647&v=beta&t=UgSkCmnPdsOOG5F5E_Pnb2r8vGc05pr5YdcPScFpV1w', // Replace with actual image source
    },
    {
      name: 'Jane Smith',
      credentials: 'M.A. in History',
      bio: 'Jane is an enthusiastic historian with a deep love for sharing the stories of the past.',
      imageSrc: 'https://media.licdn.com/dms/image/C5603AQEZRRyun4ZGCA/profile-displayphoto-shrink_800_800/0/1655800643268?e=2147483647&v=beta&t=UgSkCmnPdsOOG5F5E_Pnb2r8vGc05pr5YdcPScFpV1w', // Replace with actual image source
    },
    {
      name: 'Jane Jocky',
      credentials: 'M.A. in Chamestry',
      bio: 'Jane is an enthusiastic historian with a deep love for sharing the stories of the past.',
      imageSrc: 'https://media.licdn.com/dms/image/C5603AQEZRRyun4ZGCA/profile-displayphoto-shrink_800_800/0/1655800643268?e=2147483647&v=beta&t=UgSkCmnPdsOOG5F5E_Pnb2r8vGc05pr5YdcPScFpV1w', // Replace with actual image source
    },
    // Add more instructors as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-8 text-center">Our Expert Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-md mb-4"
          >
            <img
              src={instructor.imageSrc}
              alt={instructor.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{instructor.name}</h2>
            <p className="text-gray-100 text-sm mb-2">{instructor.credentials}</p>
            <p className="text-gray-100">{instructor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorProfiles;

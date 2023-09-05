import React from 'react'

const PartnersSection = () => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Partners and Accreditations</h2>
        <div className=' border p-8 rounded'>
        <div className="flex flex-wrap justify-center items-center space-x-6">
          {/* Partner 1 */}
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&w=1000&q=80" // Replace with your partner's logo image URL
              alt="Partner 1 Logo"
              className="mx-auto h-16"
            />
            <p className="mt-4 text-lg">University of Excellence</p>
          </div>
          {/* Partner 2 */}
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <img
              src="https://livingwell.org.au/wp-content/uploads/2019/08/being-a-man-1a.jpg" // Replace with your partner's logo image URL
              alt="Partner 2 Logo"
              className="mx-auto h-16"
            />
            <p className="mt-4 text-lg">Academic Institute</p>
          </div>
          {/* Add more partners here */}
        </div>
        <p className="mt-12 text-xl">
          We are proud to collaborate with these esteemed institutions and hold the following accreditations:
        </p>
        <div className="mt-8 text-left">
          <ul className="list-disc list-inside text-xl">
            <li>Regional Accreditation: <span className="font-semibold">ACCREDITOR</span></li>
            <li>Online Learning Accreditation: <span className="font-semibold">ACCREDITOR</span></li>
            <li>Industry Certification: <span className="font-semibold">CERTIFICATION BODY</span></li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
export const metadata = {
  title: 'About-EduConnect',
}

const AboutPage = () => {
  return (
    <div className="relative">
        <div className="relative">
      <img src="https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
      <div className="bg-black absolute inset-0 opacity-80"></div>
      </div>
        <div className="absolute inset-0 top-28 mx-20">
        <section className="shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-semibold mb-6 text-white text-center skew-x-3">About EduConnect</h1>
          <p className="text-gray-200 leading-relaxed">
            Welcome to EduConnect, your trusted online education platform. We are dedicated to delivering high-quality and accessible learning experiences to individuals around the world.
          </p>
          <p className="text-gray-200 leading-relaxed mt-4">
            Our team of experienced educators and innovative technologists work together to provide a diverse range of courses across various subjects. We believe in the power of education to transform lives and drive positive change.
          </p>
        </section>

        <section className="mt-8 shadow-md shadow-teal-500 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We strive to make education accessible to everyone, breaking down barriers and enabling lifelong learning. Our mission is to empower individuals with knowledge and skills that lead to personal growth and success.
          </p>
        </section>

        <section className="mt-8 text-white py-12 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-lg leading-relaxed">
            Whether you're a student, professional, or simply curious, EduConnect has something for you. Join our community of learners and embark on a journey of discovery and achievement.
          </p>
          <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-3 rounded-lg transition duration-300">
            Explore Courses
          </button>
        </section>
        </div>
      </div>
  )
}

export default AboutPage
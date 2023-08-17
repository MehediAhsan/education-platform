export const metadata = {
  title: 'About-EduConnect',
}

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
        <section className=" shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-semibold mb-6 text-white text-center">About EduConnect</h1>
          <p className="text-gray-200 leading-relaxed">
            Welcome to EduConnect, your trusted online education platform. We are dedicated to delivering high-quality and accessible learning experiences to individuals around the world.
          </p>
          <p className="text-gray-200 leading-relaxed mt-4">
            Our team of experienced educators and innovative technologists work together to provide a diverse range of courses across various subjects. We believe in the power of education to transform lives and drive positive change.
          </p>
        </section>

        <section className="mt-8 border border-blue-500 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We strive to make education accessible to everyone, breaking down barriers and enabling lifelong learning. Our mission is to empower individuals with knowledge and skills that lead to personal growth and success.
          </p>
        </section>

        <section className="mt-8 bg-gray-800 text-white py-12 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-lg leading-relaxed">
            Whether you're a student, professional, or simply curious, EduConnect has something for you. Join our community of learners and embark on a journey of discovery and achievement.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Explore Courses
          </button>
        </section>
      </div>
  )
}

export default AboutPage
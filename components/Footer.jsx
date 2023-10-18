import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import Wave from 'react-wavify'

const Footer = () => {
  return (
    <>
    <Wave fill='#111827'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 100,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
  />
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">1234 Education Street</p>
          <p className="text-gray-400">Dhaka, Bangladesh</p>
          <p className="text-gray-400">info@educonnect.com</p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            {/* Add more links */}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
          <p className="text-gray-400">Follow us on social media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookSquare className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitterSquare className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagramSquare className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 EduConnect. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;

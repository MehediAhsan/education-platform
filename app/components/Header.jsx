import Link from "next/link"

const Header = () => {
  return (
    <nav className="bg-blue-900 py-4 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-white">
            EduConnect
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/courses" className="text-gray-300 hover:text-white">
              Courses
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
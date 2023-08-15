import React from 'react'

const ContactPage = () => {
  return (
    <div className="container w-11/12 mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-8 text-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <img
              src="https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139103.jpg"
              alt="Contact"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default ContactPage
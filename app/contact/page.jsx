
const ContactPage = () => {
  return (
    <div className="relative">
      <div className="relative">
      <img src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
      <div className="bg-black absolute inset-0 opacity-70 "></div>
      </div>
        <div className="absolute top-44"> 
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10 md:mx-28">
          <div className="w-full">
            <h1 className="bg-teal-500 text-center uppercase p-2">Address</h1>
            <p className="bg-gray-900 text-center uppercase p-10 w-11/12 mx-auto -skew-x-3">Dhaka, Banasree</p>
          </div>
          <div className="w-full">
            <h1 className="bg-teal-500 text-center uppercase p-2">Email</h1>
            <p className="bg-gray-900 text-center uppercase p-10 w-11/12 mx-auto -skew-x-3">xyx@gmail.com</p>
          </div>
          <div className="w-full">
            <h1 className="bg-teal-500 text-center uppercase p-2">Phone</h1>
            <p className="bg-gray-900 text-center uppercase p-10 w-11/12 mx-auto -skew-x-3">1234 5878 4544</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <img
              src="https://img.freepik.com/free-photo/top-view-gray-monday-concept-composition-with-telephone_23-2149139103.jpg"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500 text-black"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500 text-black"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500 text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
  )
}

export default ContactPage
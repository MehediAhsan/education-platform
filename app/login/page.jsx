import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div>
        <div className="relative">
      <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
      <div className="bg-black absolute inset-0 opacity-80"></div>
      </div>

      <div className="absolute inset-0 top-44 w-4/12 mx-auto shadow-md shadow-teal-200 rounded">
      <form action="" className="w-9/12 mx-auto p-8 flex flex-col gap-6">
            <div>
                <legend className="text-xl mb-4">Email :</legend>
                <input type="email" className="ml-6 bg-transparent p-2 shadow-sm shadow-white rounded" placeholder="Write here..." />
            </div>
            <div>
                <legend className="text-xl mb-4">Password :</legend>
                <input type="password" className="ml-6 bg-transparent p-2 shadow-sm shadow-white rounded" placeholder="Write here..." />
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 w-20 p-2 rounded text-lg">Login</button>
            <p className="text-center text-teal-500 text-2xl">----Or----</p>
            <button className="flex justify-center items-center gap-2 border-b-2 rounded border-teal-500 transition duration-300 hover:bg-teal-600 py-2 text-lg shadow-sm shadow-teal-500"><span>Login With Google</span> <FaGoogle/></button>
            <p className="text-center pb-3">Are you new? Please <Link href="/signup" className="text-teal-400">sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
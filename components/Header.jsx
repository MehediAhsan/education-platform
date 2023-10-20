'use client';
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaEnvelope, FaBook, FaTimes, FaBars, FaBookOpen, FaEyeDropper } from "react-icons/fa";

const Header = () => {
  const Menus = [
        {
            name: 'Home', 
            link:'/',
            icon: <FaHome></FaHome>
        },
        {
            name: 'CONTACT US', 
            link:'/contact',
            icon: <FaEnvelope></FaEnvelope>
        },
        {
            name: 'Courses', 
            link:'/courses',
            icon: <FaBook></FaBook>
        },
        {
            name: 'About', 
            link:'/about',
            icon: <FaEyeDropper></FaEyeDropper>
        },

    ]

    let [open, setOpen] = useState(false)

  return (
    <div className="bg-black text-white w-full fixed top-0 left-0 z-50 opacity-80 shadow-xl">
            <div className="flex items-center justify-between px-14 py-7">
                <div className="flex justify-center items-center text-2xl font-semibold gap-3">
                    <FaBookOpen className="text-teal-400 text-3xl"></FaBookOpen>
                    <Link href="/" ><h1 className="font-semibold font-sans italic cursor-pointer">EduConnect</h1></Link>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="md:hidden absolute top-8 right-10 text-xl">
                        {
                            open ? <FaTimes></FaTimes> : <FaBars></FaBars> 
                        }
                    </div>
                    <ul className={`md:flex md:items-center justify-center absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 py-4 md:py-0 uppercase ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'} `}>
                        {
                            Menus.map(Menu => <li key={Menu.name} className="flex justify-center items-center gap-1 md:ml-6 my-6 md:my-0 transition duration-300 hover:text-teal-400 font-medium">
                                <span className="text-xl text-teal-400">{Menu.icon}</span>
                               <Link href={Menu.link}>{Menu.name}</Link> 
                            </li>)
                        }
                        <Link href="/login" className="flex justify-center items-center md:ml-6 relative">
                            <button className="border border-teal-600 px-4 py-1 text-lg font-medium rounded hover:bg-teal-600 transition duration-300">Login</button>
                            <div className="bg-teal-600 absolute w-2 inset-0"></div>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default Header;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"


const SideBar = () => {

    const [width,setWidth] = useState("w-12");
    const nevigate = useNavigate()


  return (
            <div className={`flex-shrink-0 ${width} transform transition-all duration-300 bg-gray-800 flex flex-col justify-between`}>
                <div className={`flex items-center ${width==="w-12" ? "flex-row-reverse px-3" :"flex-row"} justify-between text-white w-full p-5`} >
                    <button onClick={(e)=>{
                        e.preventDefault()
                        if(width === "w-12"){
                            setWidth("w-64")
                        }else{
                            setWidth("w-12")
                        }
                        }} className="text-3xl" ><i className="fa-solid fa-bars"></i></button>
                    <h1 className={`text-2xl text-white ${width==="w-12" ? "hidden" :"flex"}  transform transition-all duration-300`} ><i className="fa-solid fa-user-graduate"></i></h1>
                </div>
                <nav className={`  ${width === "w-64" ? "flex" : "hidden" } flex-col gap-6 w-full items-center justify-center text-lg `}>
                    <Link to={"/Home"} className="block py-2 px-4 w-full text-center text-gray-200 hover:bg-gray-700">Home</Link>
                    <Link to={"/user"} className="block py-2 px-4 w-full text-center text-gray-200 hover:bg-gray-700">About</Link>
                    <Link to={"/book"} className="block py-2 px-4 w-full text-center text-gray-200 hover:bg-gray-700">books</Link>
                    <Link to={""} className="block py-2 px-4 w-full text-center text-gray-200 hover:bg-gray-700">Logout</Link>
                </nav>
                <nav className={`flex-col gap-6 items-center justify-center ${width === "w-12" ? "flex" : "hidden text-lg" }`}>
                    <Link to={"/Home"} className="block w-full text-center text-gray-200 hover:bg-gray-700"><i className="fa-solid fa-house"></i></Link>
                    <Link to={"/user"} className="block w-full text-center text-gray-200 hover:bg-gray-700"><i className="fa-solid fa-user"></i></Link>
                    <Link to={"/book"} className="block w-full text-center text-gray-200 hover:bg-gray-700"><i className="fa-solid fa-book"></i></Link>
                    <Link onClick={(e)=>{
                        e.preventDefault();
                        if (typeof Storage !== 'undefined') {
                            localStorage.removeItem('user');
                            nevigate("/");
                        } else {
                            console.log('Local storage is not supported in this browser.');
                        }  
                    }} className="block w-full text-center text-gray-200 hover:bg-gray-700"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                </nav>
                <div className={`w-full flex items-center justify-center`} >
            </div>
            </div>
  )
}

export default SideBar

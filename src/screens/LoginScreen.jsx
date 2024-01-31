import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"


const Login = () => {

  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const navigate = useNavigate()

  const checkAuth = (e)=>{
    e.preventDefault()

    var storedUser = JSON.parse(localStorage.getItem('user'));
    
    if(storedUser.StdID === user && pass === storedUser.pass){
          navigate("/Home");
    }else{
          alert("user not Found !");
    }

  }


  return ( 
    <div className="h-screen w-full fixed bg-slate-200 flex justify-center items-center " >
        <div className="border shadow-md flex flex-wrap bg-white rounded-md h-auto w-96" >
              <div className="w-full h-auto p-2 flex items-center justify-center border" >
                    <h1 className="text-4xl" ><i className="fa-solid fa-user-graduate"></i></h1>
              </div>
              <form onSubmit={checkAuth} action="" className="w-full p-3" >
              <div className="w-full flex flex-col gap-5 justify-center items-center h-auto p-2" >
                  <div>
                    <input onChange={(e)=>{
                      e.preventDefault();
                      setUser(e.target.value)
                    }} placeholder="Enter User Id" className="border text-sm h-12 w-72 border-gray-300 rounded-full text-center shadow-sm" type="number" name="" id="" />
                  </div>
                  <div>
                    <input onChange={(e)=>{
                      e.preventDefault();
                      setPass(e.target.value)
                    }} placeholder="Enter User Password" className="border text-sm h-12 w-72 border-gray-300 rounded-full text-center shadow-sm" type="password" name="" id="" />
                  </div>
                  <div>
                    <button type='submit' className="w-36 h-10 shadow-md bg-blue-600 text-white text-base rounded-full" >Sign In</button>
                  </div>
                  <div className="text-sm flex items-center justify-center  w-full" >
                      <Link to={"/signup"}>don't have an account ?</Link>
                  </div>
              </div>
              </form>
        </div>
    </div>
  )
}

export default Login

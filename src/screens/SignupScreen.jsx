import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"


const SignupScreen = () => {


    const [FirstName,setFirstName] = useState("");
    const [LasttName,setLastName] = useState("");
    const [Email,setEmail] = useState("");
    const [Pass,setPass] = useState("");
    const [StdID,setStdID] = useState(0);
    const navigate = useNavigate()

    const [selectedRole, setSelectedRole] = useState('user');

    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };


    const onSubmitHandler =  () => {
     
        if(FirstName && LasttName && Email && Pass && StdID){

            const name = FirstName + LasttName

            const userData = {
                name: name,
                email : Email,
                pass : Pass,
                StdID : StdID,
                role : selectedRole,
            };
            
            localStorage.setItem('user', JSON.stringify(userData));
            navigate("/");
            

        }else{

            alert("please Fill All the input fields !")
        
        }
        
    }



  return (
        <div className="h-screen w-full bg-slate-200 flex justify-center items-center fixed " >
            <div className="border shadow-md flex justify-center flex-wrap bg-white rounded-md h-auto w-auto p-2" >
                    <div className="h-auto w-full flex items-center justify-center p-5 border-b-2" >
                        <h1 className="text-4xl" ><i className="fa-solid fa-user-graduate"></i></h1>
                    </div>
                <form onSubmit={onSubmitHandler} action="">
                    <div className="h-auto w-full flex flex-row" >
                        <div className="p-2 flex flex-col gap-2" >
                            <h1 className="text-lg text-gray-600" >First Name</h1>
                            <input onChange={(e)=>{
                                e.preventDefault();
                                setFirstName(e.target.value)
                            }} placeholder="Enter First Name" className="border text-sm h-12 w-72 border-gray-300 rounded-md text-center shadow-sm" type="text" name="" id="" />
                        </div>
                        <div className="p-2 flex flex-col gap-2" >
                            <h1 className="text-lg text-gray-600" >Last Name</h1>
                            <input onChange={(e)=>{
                                e.preventDefault();
                                setLastName(e.target.value)
                            }} placeholder="Enter Last Name" className="border text-sm h-12 w-72 border-gray-300 rounded-md text-center shadow-sm" type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div className="p-2 flex flex-col gap-2" >
                                <h1 className="text-lg text-gray-600" >ID</h1>
                                <input onChange={(e)=>{
                                    e.preventDefault();
                                    setStdID(e.target.value)
                                }} placeholder="Enter Student Id" className="border text-sm h-12 w-full border-gray-300 rounded-md text-center shadow-sm" type="number" name="" id="" />
                        </div>
                    </div>
                    <div className="h-auto w-full flex flex-row" >
                        <div className="p-2 flex flex-col gap-2" >
                            <h1 className="text-lg text-gray-600" >Email</h1>
                            <input onChange={(e)=>{
                                e.preventDefault();
                                setEmail(e.target.value)
                            }} placeholder="Enter Email" className="border text-sm h-12 w-72 border-gray-300 rounded-md text-center shadow-sm" type="text" name="" id="" />
                        </div>
                        <div className="p-2 flex flex-col gap-2" >
                            <h1 className="text-lg text-gray-600" >Password</h1>
                            <input onChange={(e)=>{
                                e.preventDefault();
                                setPass(e.target.value)
                            }} placeholder="Enter Password" className="border text-sm h-12 w-72 border-gray-300 rounded-md text-center shadow-sm" type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center gap-3' >
                    <div className="flex items-center">
                            <input
                                type="radio"
                                id="userRole"
                                value="user"
                                checked={selectedRole === 'user'}
                                onChange={handleRoleChange}
                                className="mr-2"
                            />
                            <label htmlFor="userRole" className="cursor-pointer">
                                User
                            </label>
                            </div>

                            <div className="flex items-center">
                            <input
                                type="radio"
                                id="adminRole"
                                value="admin"
                                checked={selectedRole === 'admin'}
                                onChange={handleRoleChange}
                                className="mr-2"
                            />
                            <label htmlFor="adminRole" className="cursor-pointer">
                                Admin
                            </label>
                            </div>
                    </div>
                    <div className="h-auto w-full flex justify-center flex-col gap-4 items-center mt-5" >
                        <button type='submit' className="bg-blue-600 px-6 py-2 text-white rounded-full" >Submit</button>
                        <Link to={"/signin"}>do you already have an account ?</Link>
                    </div>

                </form>
            </div>
        </div>
  )
}

export default SignupScreen

import React from 'react'
import SideBar from '../components/SideBar'

const User = () => {
 
  var storedUser = JSON.parse(localStorage.getItem('user'));

 
  return (
    <div className=" h-screen  flex fixed w-full bg-gray-200" >
      <SideBar/>
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <div className="border-b-2 w-full justify-start border-gray-300 py-2">
                <h1 className="text-2xl font-semibold">Library Managment System</h1>
            </div>
            <div className='w-full flex flex-col  justify-center items-center'>
            <h1 className='self-start'>User Information</h1>
            <div className="mt-4 flex w-6/12 flex-col justify-center">
                <div className='h-96 p-4 flex rounded-md mt-10 w-full bg-slate-500' >
                  <div className=' text-white flex flex-col gap-3 justify-center w-full' >
                      <div className='w-full h-12 border-b-2 py-10 gap-5 items-center justify-center flex' >
                        <h1 className=' text-3xl' ><i className="fa-solid fa-user-graduate"></i></h1>
                        <h1>{storedUser.role}</h1>
                      </div>
                      <div className='text-2xl text-white flex justify-evenly flex-col h-full' >
                          <h1>Name : {storedUser.name}</h1>
                          <h1>Email : {storedUser.email}</h1>
                          <h1>status : {"Active"}</h1>
                          <h1>ID : {storedUser.StdID}</h1>
                      </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default User

import React from 'react'
import SideBar from '../components/SideBar'
import {useDispatch, useSelector} from "react-redux"
import { setAvailable, setCheckIn_book} from '../redux/slices/Book';
import { library } from '../DSA-functions';

const Home = () => {

      const CheckOutBooks = library.checkedOutQueue
      console.log(CheckOutBooks)

  return (
    <div className=" h-screen  flex fixed w-full bg-gray-200" >
      <SideBar/>
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <div className="border-b-2 border-gray-300 py-2">
                <h1 className="text-2xl font-semibold">Library Managment System</h1>
            </div>
            <div className="mt-4 flex w-full flex-col justify-center">
                <h1>Lobby</h1>
            </div>
            <div className='h-auto p-10 w-full rounded-md bg-slate-500' >
                  <h1 className='p-2 text-2xl text-white w-full text-center' >Your Checked Out Books !</h1>
                  <div className='w-full h-full m-3 flex flex-wrap gap-5' >
                    {CheckOutBooks.map((ele,ind)=>{
                        return(<>
                              <div className='border shadow-md gap-5 bg-slate-200 rounded-md h-auto w-56 flex flex-col p-5' >
                                    <h1>Book Title : {ele.data.title}</h1>
                                    <h1>Book Author : {ele.data.author}</h1>
                                    <h1>Book isbn : {ele.data.isbn}</h1>
                                    <button
                                    className={`shadow-md rounded-md p-3 bg-green-500 text-white`}
                                    onClick={(e)=>{
                                          e.preventDefault();
                                          library.checkinBook(ele.data.title)
                                    }} >check in</button>
                              </div>
                        </>);
                    })}
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Home

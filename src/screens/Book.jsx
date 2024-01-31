import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import AddBookModal from '../components/AddbookModal';
import {useSelector, useDispatch} from "react-redux"
import { _searchBook, delBook, setAvailable, setCheckIn} from '../redux/slices/Book';
import {library} from '../DSA-functions';
import DeleteModal from '../components/DeleteBook';



const Book = () => {

  const [searchBook, setSearchBook] = useState('');
  const [Book_found, setBook_found] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem('user')) || {}

  // modal...

  const [isOpenDelModal ,setIsDelopenModal] = useState(false);
  const [heading,setHeading] = useState("");
  const [content,setContent] = useState("");
  const [DeleteNode,setDeleteNode] = useState();

    const handleSearchBook = () => {
      console.log(searchBook)
      setBook_found(library.searchByTitle(searchBook))

    };


  return (
    <div className=" h-screen  flex fixed w-full bg-gray-200" >
      
      <SideBar/>

        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            
            
            <div className="border-b-2 border-gray-300 py-2">
                <h1 className="text-2xl font-semibold">Library Managment System</h1>
            </div>
            
            
            <div className="mt-4 flex w-full flex-col justify-center">
                <h1>Books Storage</h1>
            </div>
        

            <div className='w-full h-auto p-2 flex ' >
                <input onChange={(e)=>{
                    e.preventDefault();
                    setSearchBook(e.target.value)
                }} type="text" className='w-full h-16 shadow-md rounded-r-none rounded-md p-3' placeholder="Enter Book Name Here !" />
                <button onClick={(e)=>{
                    e.preventDefault();
                    handleSearchBook()
                }} className='w-20 bg-blue-600 rounded-md rounded-l-none text-white text-2xl shadow-md' ><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

             { Book_found ? (<div className='w-full flex items-center justify-center'>
                
                <div className="w-10/12 mb-20 mt-2 flex justify-between items-center h-auto p-2 rounded-md bg-white">
                  
                  <div>
                    <h1>Book : {Book_found.title} </h1>
                    <h1>Author : {Book_found.author} </h1>
                    <h1>isbn : {Book_found.isbn} </h1>
                  </div>
                  
                  {storedUser.role === "admin" ? (
                            
                            <button
                                onClick={(e)=>{
                                e.preventDefault();
                                setIsDelopenModal(true);
                                setHeading("WARNING");
                                setContent("Are you sure You want To delete the Book ?")
                                setDeleteNode(Book_found)
                                }} 
                                className={`bg-red-600 text-white p-3 px-6 rounded-md shadow-sm`}
                            >Delete</button>
                      
                      ) : (
                    
                            <button
                                onClick={(e)=>{
                                  e.preventDefault();
                                  setIsDelopenModal(true);
                                  setHeading("Check out the Book");
                                  setContent("Would you like to Checked out please Confirm !")
                                  setDeleteNode(Book_found)
                                }} 
                                className={`bg-blue-600 text-white p-3 px-6 rounded-md shadow-sm`}
                            >Check out</button>
                    
                    )}

                    <div  className='bg-green-600 flex items-center rounded-full p-2  rounded-r-none px-5 text-white' >{Book_found.status}</div>
                
                </div>
             
             </div>) : "book not found!"}

             
            {storedUser.role === "admin" ? <div 
            className='w-full p-3  flex justify-end' >
                <button onClick={(e)=>{
                    e.preventDefault();
                    setIsOpen(true)
                }} className='p-4 shadow-md bg-blue-600 text-white rounded-md' > + ADD Book</button>
                 </div> : ""}


             <div className="p-2 flex flex-col gap-4">
                {  
                library.printList()
                .map((CurEl, index) => {
                    return (

                        <div
                          key={index}
                          className="w-full flex justify-between items-center h-auto p-2 rounded-md bg-white"
                        >
                          <div>
                            <h1>Book : {CurEl.title} </h1>
                            <h1>Author : {CurEl.author} </h1>
                            <h1>isbn : {CurEl.isbn} </h1>
                          </div>
                          <div className="flex flex-row-reverse gap-3">
                            <div  className='bg-green-600 flex items-center rounded-full p-2  rounded-r-none px-5 text-white' >{CurEl.status}</div>
                            {storedUser.role === "admin" ? (
                            
                                  <button
                                      onClick={(e)=>{
                                      e.preventDefault();
                                      setIsDelopenModal(true);
                                      setHeading("WARNING");
                                      setContent("Are you sure You want To delete the Book ?")
                                      setDeleteNode(CurEl)
                                      }} 
                                      className={`bg-red-600 text-white p-3 px-6 rounded-md shadow-sm`}
                                  >Delete</button>
                            
                            ) : (
                          
                                  <button
                                      onClick={(e)=>{
                                        e.preventDefault();
                                        setIsDelopenModal(true);
                                        setHeading("Check out the Book");
                                        setContent("Would you like to Checked out please Confirm !")
                                        setDeleteNode(CurEl)
                                      }} 
                                      className={`bg-blue-600 text-white p-3 px-6 rounded-md shadow-sm`}
                                  >Check out</button>
                          
                          )}
                          
                          </div>
                        </div>
                    );
                  })}
             </div>
        
        </div>

        <AddBookModal _isOpen={isOpen} _setIsopen={setIsOpen}  />
        <DeleteModal isOpen={isOpenDelModal} heading={heading} content={content} setIsOpen={setIsDelopenModal} Element={DeleteNode} setTemp={setBook_found}/>
    
    </div>
  )

}

export default Book




                // .slice()
                // .sort((a, b) => a.title.localeCompare(b.title))
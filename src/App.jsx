import React from 'react'
import Login from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import Home from './screens/Home'
import User from './screens/user'
import {Routes ,Route} from "react-router-dom"
import Book from './screens/Book'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"/signup"} element={<SignupScreen/>} />
        <Route path={"/Home"} element={<Home/>} />
        <Route path={"/user"} element={<User/>} />
        <Route path={"/book"} element={<Book/>} />
      </Routes>
    </div>
  )
}

export default App

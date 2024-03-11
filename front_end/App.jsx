import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

import { lazy } from 'react'
const LazyLogin = lazy(()=>import("./Pages/Login"))
const LazySignup = lazy(()=>import("./Pages/Signup"))
const LazyHome = lazy(()=>import("./Pages/Home"))
const LazyLogin2 = lazy(()=>import("./Pages/Login"))
const LazyLogin3 = lazy(()=>import("./Pages/Login"))
const LazyLogin4 = lazy(()=>import("../src/Pages/Profile"))
const LazyLogin5 = lazy(()=>import("../src/Pages/ContactPage"))
const LazyLogin6 = lazy(()=>import("../src/Pages/AboutPage"))
const LazyLogin7 = lazy(()=>import("../src/Pages/NaviYogaCentrePage"))
const LazyLogin8 = lazy(()=>import("../src/Pages/EnrolForm"))
const LazyLogin9 = lazy(()=>import("../src/Pages/EnrolSuccessPage"))
const LazyDashboard = lazy(()=> import("../src/Pages/Admin/AdminDashboard"))
const LazyAbout = lazy(()=> import("../src/Pages/AboutPage"))
const LazyContact = lazy(() => import("../src/Pages/ContactPage"))
import UserLayout from './Pages/UserLayout'
import {Admin} from './Pages/Admin/Admin'
const LazyAdmin = lazy(() => {
  return import("../src/Pages/Admin/Admin")
})

import LazyLayout from './Components/LazyLayout'
const LazyAdmin1= lazy(() => import("./Pages/Admin/Admin1"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
        <Route path="/login" element={<LazyLayout component={LazyLogin2}/>}/>
        <Route path="/login1" element={<LazyLayout component={LazyLogin3}/>}/>
        <Route path="/profile" element={<LazyLayout component={LazyLogin4}/>}/>
        <Route path="/contactpage" element={<LazyLayout component={LazyLogin5}/>}/>
        <Route path="/aboutpage" element={<LazyLayout component={LazyLogin6}/>}/>
        <Route path="/navi" element={<LazyLayout component={LazyLogin7}/>}/>
        <Route path="/enrol" element={<LazyLayout component={LazyLogin8}/>}/>
        <Route path="/success" element={<LazyLayout component={LazyLogin9}/>}/>
        <Route path="/admin" element={<LazyLayout component={Admin}/>}/>
        <Route path="/admin/DashBoard" element={<LazyLayout component={LazyDashboard}/>}/>
        <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
        <Route path="/contact" element={<LazyLayout component={LazyContact}/>}/>
        

      </Routes>

   
    </div>
    </BrowserRouter>
  )
}

export default App

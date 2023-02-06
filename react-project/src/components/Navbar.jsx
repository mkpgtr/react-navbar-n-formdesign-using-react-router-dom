import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {useState } from 'react'
import './css/Navbar.css'

const Navbar = () => {


  



  
  

    // ! array of objects where each object holds information about
    // ! a certain link
    const navigationLinks = [
        {
            id:1,
            // ! whenever this will be called Navbar component will be rendered
            // ! the index property in the AddSales route located in App.js will automatically trigger the AddSales Page

            path:'/',
            text:'Add Sales'
        },
        {
            id:2,
            path:'/todays-revenue',
            text:`Today's  Total Revenue`
        },
        {
            id:3,
            path:'/login',
            text:'Login'
        },
        {
            id:4,
            path:'/top-five-sales',
            text:'Top Five Sales'
        },
        {
            id:5,
            path:'/register',
            text:'Register'
        },
        
    ]
  return (
    <div>
        {/* ! this represents the entire layout of the application. the navbar
            does not change for the entire application. it stays at the same 
            place.
        */}
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sales App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
        {
            navigationLinks.map((navigationLink)=>{
                return <li className="nav-item" key={navigationLink.id}>
                <NavLink className={({isActive})=>(isActive?"active nav-link":"nav-link")} to={navigationLink.path}>{navigationLink.text}</NavLink> 
               </li>
            })
        }
       
        
        
        <li className="nav-item">
          <a className="nav-link disabled">LOGOUT</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
{/* ! this outlet component renders the nested routes. this is the 
    content 

*/}
{/* Outlet will show any component that is nested within the parent route. */}
        <Outlet />
    </div>
  )
}

export default Navbar
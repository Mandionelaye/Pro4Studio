import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

export default function Header() {
  return (
   <>
<nav class="navmoi navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
       <img src="images/logo.jpeg" alt="" className='img_logo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to={"/"}>Accuil</Link>
        </li>
        <li class="nav-item">
        <Link to={"/Studio"} className='nav-link' >Studio</Link>
        </li>
        <li class="nav-item">
        <Link to={"/Beauty"} className='nav-link' >Beauty</Link>
        </li>
        <li class="nav-item">
        <Link to={"/Decoration"} className='nav-link' >Decoration</Link>
        </li>
        <li class="nav-item">
        <Link to={"/Shop"} className='nav-link' >Shop</Link>
        </li>
      </ul>
      <div class="d-flex">
            <Link to={"/Reservation"} className='nav-link me-3' >Reservation</Link>
            <a href="https://wa.me/+221772545324" className='me-3 am'><i class="fa-solid fa-phone fa-bounce"></i></a>
            <a href="mailto:mandionelay99@gmail.com" className='am'><i class="fa-solid fa-envelope"></i></a> 
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

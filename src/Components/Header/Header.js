import React from 'react'
import './Header.css'

const Header = () => {
    const navIcon = 'https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp'
    const profileIcon = "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
  return (

    <div className='container-fuild'>

        <nav className="navbar navbar-expand-lg navbar-light shadow mb-4">
        
        <div className="container-fluid">
        
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>

        
            <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
            
                <h4 className="navbar-brand mt-2 mt-lg-0 text-white" > Game Store </h4>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <a className="nav-link text-white" >Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" >App</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" >Game</a>
                    </li>
                </ul>
            
            </div>
        

        
            <div className="d-flex align-items-center">

                
                <div className="dropdown">
                    <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <img
                        src={profileIcon}
                        className="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                    />
                    </a>
                    <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                    >
                    <li>
                        <a className="dropdown-item" >My profile</a>
                    </li>
                    <li>
                        <a className="dropdown-item" >Settings</a>
                    </li>
                    <li>
                        <a className="dropdown-item">Logout</a>
                    </li>
                    </ul>
                </div>

            </div>
        
        </div>
        
        </nav>
    </div>

    

 
  )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './Buttons/CartBtn'
import Login from './Buttons/login'
import SignUp from './Buttons/signUp'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid py-2" >

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                        <NavLink className="navbar-brand mx-auto fs-3 fw-bold ms-5" to="/">MOBILE STORE</NavLink>
                    </div>
                    
                    <Login />
                    <SignUp />
                    <CartBtn/>
                </div>
                <hr />
            </nav>
        </>

    )
}

export default Header
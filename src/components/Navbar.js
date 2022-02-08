import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-img.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg _nbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" aria-current="page" to="/">
                        <img className="_nbarimg" src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active _nbarlink" to="/joinmeeting">Join Meeting</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className="btn _hombtn" to="/login" role="button">Login</Link>
                            <Link className="btn _hombtn mx-2" to="/signup" role="button">SignUp</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

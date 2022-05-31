import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, } from 'react-router-dom';


import logo from '../img/logo.png';

//import Mailto from 'react-mailto';

const Footer = () => {
    return (
        <footer>

            <Nav className="me-auto justify-content-center flex-grow-1 pe-3 nav-o">
                <Link to="/" className='nav-link n-link active' >

                    
                    Home

                </Link>

                <Link to={{ pathname: "/projects" }} className='nav-link n-link active'>

                    
                    Projecten
                </Link>

                <Link to="/contact" className='nav-link n-link active'>

                   
                    Contact

                </Link>

            </Nav>

            <Link to="/" >
                <Navbar.Brand  > <img className='logo' src={logo} alt='LOGO' /> </Navbar.Brand>
            </Link>

            <div className='s-icons' >

                <a href='https://www.facebook.com/outmaneBouhaddouch.dev/'>
                    <FacebookOutlinedIcon className='icon' />
                </a>
                <a href='https://www.instagram.com/outmane_bouhaddouch/'>
                    <InstagramIcon className='icon' />
                </a>

                <a href="https://www.linkedin.com/in/outmane-dev/">
                    <LinkedInIcon className='icon' />
                </a>

                <a href="mailto:dev.outmane@gmail.com">
                    <AlternateEmailIcon className='icon' />
                </a>



            </div>




            <p> © 2022 Portfolio. Outmane Bouhaddouch</p>


        </footer>
    )
}

export default Footer

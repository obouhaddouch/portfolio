import React from 'react';
import { Link,  } from 'react-router-dom';
import { Navbar, Container, Nav, } from 'react-bootstrap';


import logo from '../img/logo.png';

import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

import { blue } from '@mui/material/colors';




const Header = () => {

  return (

    <Navbar className='nav-bar'  variant="dark" expand="lg">
      <Container fluid>
        

        <Link to="/" >
          <Navbar.Brand  > <img className='logo' src={logo} alt='LOGO' /> </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto justify-content-center flex-grow-1 pe-3 nav-o">
            <Link to="/" className='nav-link n-link active' >
              
              <HomeIcon className='nav-icons' sx={{ color: blue[50], fontSize: 30 }} />
              Home
              
            </Link>

            <Link to={{ pathname: "/projects" }} className='nav-link n-link active'>

              <IntegrationInstructionsIcon className='nav-icons' sx={{ color: blue[50], fontSize: 30 }} />
              Projecten
            </Link>

            <Link to="/contact" className='nav-link n-link active'>
              
              <ContactMailIcon className='nav-icons' sx={{ color: blue[50], fontSize: 30 }} />
              Contact
              
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar bg="" variant="dark" expand={false} className='nav-bar' >
    //   <Container fluid>

    //     <h1></h1>

    //     <Link to="/" >
    //       <Navbar.Brand  > <img className='logo' src={logo} alt='LOGO' /> </Navbar.Brand>
    //     </Link>
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
    //     <Navbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="end"
    //       className='dark'

    //     >


    //       <Offcanvas.Body >
    //         <Nav className="justify-content-end flex-grow-1 pe-3 nav-o">

    //           <Link to="/" className='nav-link n-link'>
    //           {/* <Nav.Link href='/portfolio/#' className='nav-link n-link'> */}
    //             <HomeIcon className='nav-icons' sx={{ color: blue[50], fontSize: 30 }} />
    //             Home
    //           {/* </Nav.Link> */}

    //           </Link>

    //           <Link  to={{ pathname: "/projects" }} className='nav-link n-link'>

    //             {/* <Nav.Link href="#start" className='nav-link n-link'> */}


    //             <IntegrationInstructionsIcon className='nav-icons' sx={{ color: blue[50], fontSize: 30 }} />
    //             Projecten


    //             {/* </Nav.Link> */}



    //           </Link>




    //           <Link to="/contact" className='nav-link n-link'>
    //           {/* <Nav.Link href="/contact" className='nav-link n-link'> */}
    //             <ContactMailIcon className='nav-icons' sx={{ color: blue[50], fontSize: 30 }} />
    //             Contact
    //           {/* </Nav.Link> */}



    //           </Link>

    //         </Nav>

    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>
  )
}



export default Header;

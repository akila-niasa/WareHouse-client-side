import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const[user]=useAuthState(auth)
    const logout = () => {
      signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" className='nav' variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">Laptop Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/' className='text-decoration-none text-light p-2 m-2'>Home</Link>
                       
                        <Link to='/blogs' className='text-decoration-none text-light p-2 m-2'>Blogs</Link>
                        {
         user?<button onClick={logout} className='header-btn text-decoration-none text-light p-2 m-2 '>Log Out</button>
         : <Link to='/login'className='text-decoration-none text-light p-2 m-2'>Login</Link>
       }
                        
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
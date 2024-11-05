import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <header>
        <Navbar expand="lg" bg="dark">
            <Container>
                <Navbar.Brand href="/">MyShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer>
                            <Nav.Link href="/cart">
                                <i className="fas fa-shopping-cart"></i> Cart 
                            </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                            <NavDropdown.Item onClick={logoutHandler}>
                                                Logout
                                            </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (<LinkContainer to="/login">
                                        <Nav.Link>
                                            <i className="fas fa-user"></i> Sign In
                                        </Nav.Link>
                                    </LinkContainer>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header
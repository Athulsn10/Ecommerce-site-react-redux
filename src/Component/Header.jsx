import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux'


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link ><Link className='d-flex align-items-center' to={'/wishlist'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Wishlist<i className="fs-5 fa-solid fa-heart ms-1" style={{color: '#ff0000'}}></i>
            <Badge className='ms-2 rounded' bg='light'>{wishlist.length}</Badge>
            </Link></Nav.Link>
            <Nav.Link ><Link className='d-flex align-items-center' to={'/cart'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Cart<i className="fs-5 fa-solid fa-cart-shopping ms-1" style={{color: '#ff0000'}}></i>
            <Badge className='ms-2 rounded' bg='light'>9</Badge>
            </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
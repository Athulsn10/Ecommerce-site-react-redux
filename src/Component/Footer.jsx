import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-content justify-content-center">
        <Col md={4} sm={12} className="website mt-3 ">
          <h3>E Cart</h3>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Currently v1.0.0</p>
        </Col>

        <Col md={4} sm={6} className="links mt-3 ">
          <h5>Links</h5>
          <Link style={{textDecoration:'none', color:'white'}} to={'/'} className="footer-link">Landing Page</Link><br />
          <Link style={{textDecoration:'none', color:'white'}} to={'/home'} className="footer-link">Home</Link><br />
          <Link style={{textDecoration:'none', color:'white'}} to={'/wishlist'} className="footer-link">Wishlist</Link>
        </Col>

        <Col md={3} sm={6} className="guides mt-5">
        <div className='d-flex'>
          <Form.Control
          type="text"
          id=""
          placeholder='search'
        />
        <button className='ms-2 btn btn-danger'>Search</button>
        </div>
        <div className='mt-3 d-flex align-items-center justify-content-center'>
        <i className="fs-4 me-3 fa-brands fa-github" style={{color: '#ffffff'}}></i>
        <i className="fs-4 me-3 fa-brands fa-linkedin" style={{color: '#ffffff'}}></i>
        <i className="fs-4 me-3 fa-brands fa-youtube" style={{color: '#ffffff'}}></i>
        <i className="fs-4 me-3 fa-brands fa-x-twitter" style={{color: '#ffffff'}}></i>
        </div>
        </Col>
      </Row>

      <p className="mt-5 text-center">Copyright © 2023 E-cart.</p>
    </Container>
  );
}

export default Footer;

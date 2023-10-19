import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  return (
    <>
     <Row className="ms-5" style={{marginTop:'100px'}}>
      {
      data && data.length>0?data.map((product,index) => (
      <Col className="mb-4" sm={12} md={6} lg={4} xl={3} >
         <Card style={{ width: '18rem',height:'25rem' }}>
          <Card.Img style={{height:'200px'}} variant="top" src={product?.thumbnail} />
          <Card.Body style={{overflowY:'hidden'}}>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
             <p>{product?.description.slice(0,60)}</p>
             <h6>${product?.price}</h6>
            </Card.Text>
            <div className='d-flex pb-5 '> 
              <Button style={{backgroundColor:'transparent', border:'none'}} className='btn p-0 me-3'>
              <i className="fs-5 fa-solid fa-heart ms-1" style={{color: '#ff0000'}}></i>
              </Button>
              <Button style={{backgroundColor:'transparent', border:'none'}} className='btn p-0'>
              <i className="fs-5 fa-solid fa-cart-shopping ms-1" style={{color: '#ffffff'}}></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      )):<p className='my-5 text-danger text-center fs-4'>Nothing To Display</p>}
     </Row>
    </>
  )
}

export default Home
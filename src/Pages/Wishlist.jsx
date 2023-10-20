import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleWishlistCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product.id));
  }

  return (
    <div className='mt-5'>
      <h3 className='text-center mt-4'>Your Items</h3>
      <Row className="m-5">
        {wishlistArray.length > 0 ? (
          wishlistArray.map((product) => (
            <Col key={product.id} className="mb-4" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={product?.thumbnail} />
                <Card.Body style={{ overflowY: 'hidden' }}>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 60)}</p>
                    <h6>${product?.price}</h6>
                  </Card.Text>
                  <div className='d-flex pb-5 '>
                    <Button
                      onClick={() => dispatch(removeFromWishlist(product.id))}
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                      className='btn p-0 me-3'
                    >
                      <i className="fs-5 fa-solid fa-trash" style={{ color: '#ff0000' }}></i>
                    </Button>
                    <Button
                      onClick={() => handleWishlistCart(product.id)}
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                      className='btn p-0'
                    >
                      <i className="fs-5 fa-solid fa-cart-shopping ms-1" style={{ color: '#00fffb' }}></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className='container d-flex flex-column justify-content-center align-items-center mt-4 mb-4'>
            <i className="fa-solid fa-heart-crack m-2" style={{ fontSize: '5rem' }}></i>
            <p className='fs-3'>Your wishlist is empty</p>
          </div>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;

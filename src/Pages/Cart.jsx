import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../redux/slices/cartSlice';

function Cart() {
  const [total, setTotal]=useState(0)
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cartReducer);

  const getCartTotal =()=>{
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const navigate = useNavigate()
  const handleCart=()=>{
    dispatch(emptyCart())
    alert("Order Placed")
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal();
  },[cartArray])

  return (
    <div className='row mt-5 align-items-center container-fluid'>
         <div className='col-lg-7'>
            <Table  striped className='mt-5 mx-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {cartArray.length > 0 ? (
          cartArray.map((product, index) => (
          <tr key={index}>
            <td><p className='ms-3 mt-4'>{index+1}</p></td>
            <td><img style={{height:'90px', width:'100px'}} className='rounded img-fluid' src={product?.thumbnail} alt="" /></td>
            <td><p className='mt-4'>{product?.title}</p></td>
            <td><p className='mt-4 fw-bold'>${product?.price}</p></td>
            <td> 
              <Button
              onClick={() => dispatch(removeFromCart(product.id))}
              style={{ backgroundColor: 'transparent', border: 'none' }}
              className='btn p-0 mt-4'>
              <i className="fs-5 fa-solid fa-trash" style={{ color: '#ff0000' }}></i>
              </Button>
            </td>
          </tr>  
           ))
           ) : <tr><p >YOUR CART IS EMPTY</p></tr>
           }      
        </tbody>
      </Table>
         </div>
         
         <div className="col-lg-5 ps-3 mt-5">
          <h3 className='text-center text-danger fw-bold'>Sub Total</h3>
          <div className="border mt-3 p-3 rounded">
            <h5>Total Products: <span>{cartArray.length}</span></h5>
            <h5>Total Amount: <span className='fw-bold'>$ {total}</span></h5>
            <div className="d-grid">
                <Button onClick={handleCart} className='btn-success mt-5 rounded'>Check Out</Button>
            </div>
          </div>
         </div>
    </div>
  );
}

export default Cart;

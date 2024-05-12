import React from 'react'
import { removeFromCart } from '../redux/slicer/slicer'
 import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store/store'
import { NavLink } from 'react-router-dom'
// import { delItem } from '../redux/action'

const Cart = () => {

    const state =useSelector(store.getState);
    const dispatch = useDispatch();
    
    const handleClose = (item) => {
        dispatch(removeFromCart(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button className='btn-close float-end' aria-label='close' onClick={()=>handleClose(cartItem)} > 
                    </button>

                    <div className='row justify-content-center'>
                        <img src={cartItem.img} alt={cartItem.title} style={{width:'100px',height:'80px'}} />
                        <div className='col-md-4'>
                            <h3>{cartItem.title }</h3>
                            <p className='lead fw-bold'>${cartItem.price }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => { 
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
            <div className='container py-4'>
                <div className='row'>
                    <h2>Your Cart is Empty</h2>
                </div>
            </div>
        </div>
       )
    }
    const button = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <NavLink to="/checkout" className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To checkout</NavLink>
                </div>
            </div>
        )
    }
  return (
      <>
          {state.store.cartItemsCount===0 && emptyCart()} 
          {state.store.cartItems.length !== 0 && state.store.cartItems.map(cartItems)}
          {state.store.cartItems.length!==0 && button()}
    </>
  )
}

export default Cart
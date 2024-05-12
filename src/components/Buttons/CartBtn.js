import React from 'react'
import { NavLink } from 'react-router-dom'

import store from '../../redux/store/store'
import { useSelector } from 'react-redux';
const CartBtn = () => {
  //we get the state of addItems
    const state =useSelector(store.getState);
    console.log(state.store.cartItemsCount);
  
  return (
      <>
          <NavLink to='/cart' className='btn btn-outline-primary  ms-2' >
            <span className='bi bi-cart3 me-1'/>Cart({state.store.cartItemsCount})
          </NavLink> 
    </>
  )
}

export default CartBtn;
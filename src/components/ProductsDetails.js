import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../Data'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/slicer/slicer'

const ProductsDetails = () => {
    // Now we need a product id which is pass from the product page 
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id);
    const product = proDetail[0];
    console.log(product);
    //handle cart button
    const [cartBtn, setCartBtn] = useState('Add to Cart');
    //we need to store useDispatch in a variable
     const dispatch = useDispatch();
    // const handleCartBtn = () => {
    //     if (cartBtn === 'Add to Cart') {
    //       //  dispatch(addItem(prod));
    //         setCartBtn("Remove from Cart")
    //     } else {
    //       //  dispatch(delItem(prod));
    //         setCartBtn('Add to Cart');
    //     }
    // }

   function handleCartBtn(prod){
        if (cartBtn === 'Add to Cart') {
            setCartBtn("Remove from Cart");
            dispatch(addToCart(prod));
        } else {
            setCartBtn('Add to Cart');
            dispatch(removeFromCart(prod));
        }
    }
  return (
      <>
          <div className='container my-5 py-3'>
              <div className='row'>
                  <div className='col-md-6 d-flex justify-content-center mx-auto mb-5product'>
                      <img src={product.img} alt={product.title} style={{height:'400px'}} />
                  </div>
                  <div className='col-md-6 d-flex flex-column justify-content-center'>
                      <h1 className='display-5 fw-bold'>{product.title}</h1>
                      <hr />
                      <h2 className='my-4'>$ {product.price}</h2>
                      <p className='lead'>{product.desc}</p>
                      <button className='btn btn-outline-primary my-5' onClick={() => { handleCartBtn(product)}}>{cartBtn}</button>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ProductsDetails
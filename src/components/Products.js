import React from 'react'
import { NavLink } from 'react-router-dom'
import {DATA} from '../Data'
const Products = () => {

  const cardItem = (item) => {
    return (
      <div className="card my-5 m-5 py-3" key={item.id} style={{width: "280px",borderRadius:"10px",}}>
        <img src={item.img} className="card-img-top mt-3" alt={item.title} style={{width:'200px',height:"250px",alignSelf:'center'}}/>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          <p className="lead">${ item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
          </div>
      </div>
    )
  }
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
          <h1>Products</h1>
            <hr/>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Products
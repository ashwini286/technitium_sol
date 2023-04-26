
import React from 'react'
import './Data.css'

export function FirstCard(props){
  const onClick = () => {
      alert(props.cart);
    };
  return(
      <div className="card">
          <p className="id">{props.productId}</p>
          <img className="image" src={props.productPic} alt="image"/>
          <p className="name">{props.productName}</p>
          <p className="brand">{props.productBrand}</p>
          <p className="description">{props.productDescription}</p>
          <p className="price">{props.productPrice}</p>
          <button className="btn" onClick={onClick}>Add to Cart</button>
      </div>
  )
}
/* productDetails = {
    producId : '1',
    productPic : ' ',
    productName : '',
    Brand : ' ',
    productDescription : ' ',
    Price : $7 ,
    Rating :

}

*/
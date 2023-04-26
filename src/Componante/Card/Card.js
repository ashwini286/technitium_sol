import React from 'react'
import {FirstCard} from '../Data/Data'
import './Card.css'
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

function CardDetails() {
  const productDetails= [
    {
      productId: 1,
      productPic: "https://images.meesho.com/images/products/119810773/llmfd_256.webp",
      productName: "T-shirt",
      productBrand: "BTS",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia..",
      productPrice:"10$", 
      cart: "product of is 1 product which is T-shirt of BTS brand has of ruppess 10$ is added in cart , please proceed to pay !!!  "
    },
    {
      productId: 2,
      productPic: "https://www.laguardajoiers.com/media/catalog/product/cache/c7fe1fe40689c75b76b4215256499255/m/a/maserati-traguardo-r8873612010_1.jpg",
      productName: "watch",
      productBrand: "Xyz",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      productPrice:"12$", 
      cart: "product of is 2 product which is watch of Xyz brand has of ruppess 12$ is added in cart , please proceed to pay !!! "
    },
    {
      productId: 3,
      productPic: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      productName: "Running Shoe",
      productBrand: "Puma",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      productPrice:"25$", 
      cart: "product of is 3 product which is Running Shoe of Puma brand has of ruppess 25$ is added in cart , please proceed to pay !!!  "
    }
  ]
  return (
    <div className="App">
      {
        productDetails.map((product)=>(
          <FirstCard
          productId={product.productId}
          productPic={product.productPic}
          productName={product.productName}
          productBrand={product.productBrand}
          productDescription={product.productDescription}
          productPrice={product.productPrice}
          cart={product.cart}
          />
        ))
      }
      
    </div>
  );
}

export default CardDetails;
// export default function Card({producId,productPic,productName,Brand , productDescription,  Price}) {
//   return (
//     <div>
//       <div className='card'>
//         <Data
//         producId = "1"
//         productPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvt9ThTkI4azpNa1Ud9qLJehlzJ8lNzQV2b5-wKS37w&usqp=CAU&ec=48665699"
//         productName = "Shoes"
//         Brand = "Adidas"
//         productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."
//         Price="5000"


//         />
//       </div>
//       <div className='card2'>
//       <Data
//         producId = "2"
//         productPic = "https://images.meesho.com/images/products/116489909/7niq0_256.webp"
//         productName = "Shoes"
//         Brand = "Adidas"
//         productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."
//         Price="5000"
//         />
//       </div>
//       <div className='card3'>
//         <Data
      
//         producId = "3"
//         productPic = "https://images.meesho.com/images/products/119810773/llmfd_256.webp"
//         productName = "T-shirt"
//         Brand = "Koka"
//         productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."
//         Price="6000"

//         />
//       </div>

//       <div className='card3'>
//         <Data
      
//         producId = "4"
//         productPic = "data:image/jpeg;base64,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"
//         productName = "Smart Watch"
//         Brand = "boat"
//         productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."
//         Price="2000"

//         />
//       </div>

//       <div className='card3'>
//         <Data
      
//         producId = "5"
//         productPic = "https://5.imimg.com/data5/BG/UM/MY-23375112/61-500x500.jpg"
//         productName = "T-shirt"
//         Brand = "Coca"
//         productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."
//         Price="3000"

//         />
//       </div>

//       <div className='card3'>
//         <Data
      
//         producId = "6"
//         productPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo2_5zkl7VWwrnNPxtplJQucQYI3mB9LSB-ZWbngEdw&usqp=CAU&ec=48665699"
//         productName = "Watch"
//         Brand = "Sonata"
//         productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."
//         Price="10000"

//         />
//       </div>
//     </div>
//   )
// }
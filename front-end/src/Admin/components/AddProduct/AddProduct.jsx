import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios';
export default function AddProduct() {

  const [image , setImage] = useState('');
  const [product, setProduct] = useState({

    title: "",
    price: "",
    discount: "",
    description: "",
   

  })
  const formData = new FormData();
  formData.append('image',image);

  const buttonHandler = async()=>{
    
    const data  = {
      product : product , 
      image : image,
    }
    console.log(product);
    console.log(image);

    axios.post('http://localhost:8080/api/v1/add-product', 

      data
     
    )
    .then(function (response) {
      console.log(response);

      if(response){
        alert("Product Added Successfully......");
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleInput = (e) => {

    const newProduct = { ...product };

    newProduct[e.target.id] = e.target.value;
    setProduct(newProduct);


  }





  return (
    <>


      <div className='add-product-container'>

        <div className='set-layout'>

          <label htmlFor='title'>Product Title</label>
          <input type='text' id='title' required

            onChange={(e) => {
              handleInput(e);
            }}

          />

        </div>
        <div className='set-layout'>

          <label htmlFor='price'>Product Price</label>
          <input type='number' id='price' required

            onChange={(e) => {
              handleInput(e);
            }}
          />

        </div>
        <div className='set-layout'>

          <label htmlFor='discount'>Discount</label>
          <input type='number' id='discount' required

            onChange={(e) => {
              handleInput(e);
            }}
          />

        </div>
        <div className='set-layout'>

          <label htmlFor='description'>Product Description</label>
          <textarea type='text' id='description' rows={5} cols={30} required

            onChange={(e) => {
              handleInput(e);
            }}
          />

        </div>
        <div className='set-layout'>

          <label htmlFor='image'>Choose Product Images</label>
          <input type='file' id='image' required

            onChange={(e) => {
            setImage(e.target.files[0] );
            }}
          />

        </div>

        <div className='set-layout'>

          <button onClick={buttonHandler} className='btn  btn-success'>Add Item</button>

        </div>
      </div>

    </>
  )
}

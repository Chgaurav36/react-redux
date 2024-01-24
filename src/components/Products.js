import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {  useDispatch } from 'react-redux';
import { add } from '../store/cartSlice'

const Products = () => {
  const dispatch  = useDispatch();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProduct(response.data);
            // console.log(response);
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();
      }, []);

      const handleAdd = (product1) =>{
        dispatch(add(product1));
      }


  return (
    <div className='products'>
      {products.map(product=>(
        <div>
            <div className='product' key={product.id}>
                <img src={product.image} alt="" />
                <h4 className='title'>{product.title}</h4>
                <h5 className='price'>Rs. {product.price}</h5>
            </div>
                <button onClick={()=>handleAdd(product)} className='btn'>
                Add to cart
                </button>
            </div>
        ))}
    </div>
  );
};

export default Products;

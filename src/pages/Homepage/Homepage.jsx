import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filter/Filter';

function Homepage() {
    // Show all products when the page loads

    //Create state for products
    const [products, setProducts] = useState([]);

    //get the api https://fakestoreapi.com/products
    useEffect(
        () => {
            //calling the api to get the product data
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                //I will store the results in the state
                setProducts(res.data);
            })
            .catch(err => console.log(err))
        }, [])

  return (
    <div className='home-container'>
        <Filter setProducts={setProducts} />
        <div className='products-container'>
            {/* Products go here */}
            {
                products &&
                products.map((item) => <ProductCard key={item.id} product={item}/> )
            }
        </div>
    </div>
  )
}

export default Homepage
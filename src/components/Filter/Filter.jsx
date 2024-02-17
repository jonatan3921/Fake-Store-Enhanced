import React, {useState, useEffect} from 'react'
import './Filter.css'
import axios from 'axios'


function Filter({setProducts}) {
    //Create a state for the category
    const [category, setCategory] = useState('');

    //Create a function to display all item available
    const displayAll = () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res.data)

        setProducts(res.data)
      })
      .catch(err => console.log(err))
    }

    // Create a useEffect to make the api call when the user clicks one category
    // Api for filter out by category https://fakestoreapi.com/products/category/
    useEffect(() => {
      // Call the api to filter out the producst by category
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res  => {
        console.log(res.data)
        //Set the Results in setProducts to display it
        setProducts(res.data)
      })
      .catch(err => console.log(err))
    }, [category])
    


  return (
    <div className='filter-btns'>
        <button onClick={() => displayAll()}>All</button>
        <button onClick={() => setCategory('electronics')}>Electronics</button>
        <button onClick={() => setCategory('jewelery')}>Jewelery</button>
        <button onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
        <button onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
    </div>
  )
}

export default Filter
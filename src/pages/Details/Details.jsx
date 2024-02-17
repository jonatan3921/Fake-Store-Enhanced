import React, {useContext} from 'react'
import './Details.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../context/CartContext'

function Details() {
    //Calling the Global state from CartContext
    const {cartItems, addItem, removeItem} = useContext(CartContext)

    //Need a state to control what is going to say the button
    const [isInTheCart, setIsOnTheCart] = React.useState(false)


    //This page will show details for a specific product
    //the product will be shown through the id that we passed in the url
    const {productId} = useParams()

    //Create state to hold data for this product
    const [product, setProduct] = React.useState('')

    React.useEffect(
        () => {
          //Is this item in the cart?
          setIsOnTheCart(cartItems.find(item => item.id == product.id))
        }, [cartItems]
      )

    //I need to show details from the product when the page loads
    //https://fakestoreapi.com/products/1

    React.useEffect(
        () => {
            //Make api call to get data
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log(res.data)
                //I have the data, now I will store it in the state
                setProduct(res.data)
            })
            .catch(err => console.log(err))
        }, [] //Run once when the page loads
    )

  return (
    <div className='details-page'>
        <div className='details-container'>
            <img src={product?.image} />
            <div className='product-info-details'>
                <p className='product-title-details'>{product?.title}</p>
                <p className='product-price-details'>{product?.price}€</p>
                <p>Description</p>
                <p className='product-description'>{product?.description}</p>
                {
                    isInTheCart?
                    <button className='addToCart-btn' onClick={() => removeItem(product?.id)}>Remove from the Cart</button>
                    :
                    <button className='addToCart-btn' onClick={() => addItem(product)}>Add to Cart</button>
                }
            </div>
        </div>
    </div>
  )
}

export default Details
import React, {useContext} from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'

function ProductCard({product}) {
  //Calling the Global state from CartContext
  const {cartItems, addItem, removeItem} = useContext(CartContext)

  //Need a state to control the icons
  const [isInTheCart, setIsOnTheCart] = React.useState(false)

  React.useEffect(
    () => {
      //Is this item in the cart?
      setIsOnTheCart(cartItems.find(item => item.id == product.id))
    }, [cartItems]
  )

  return (
    <div className='product-card'>
        <img src={product?.image} />
        
        {
          isInTheCart?
          <FaRegHeart className='favorite-icon' onClick={() => removeItem(product?.id)}/>
          :
          <FaHeart className='favorite-icon' onClick={() => addItem(product)}/>
        }
        <div className='product-info'>
            <Link to={`/details/${product?.id}`}><p className='product-title'>{product?.title}</p></Link>
            <p className='product-category'>{product?.category}</p>
            <p className='product-price'>{product?.price}€</p>
        </div>
    </div>
  )
}

export default ProductCard
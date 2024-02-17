import React, {useContext} from 'react'
import './Checkout.css'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { MdOutlineDelete } from 'react-icons/md'
import Modal from 'react-modal'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
  };

//Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility)
Modal.setAppElement(document.getElementById('root'));

function Checkout() {
    //Call the global state from the context
    const {cartItems, removeItem, clearBasket} = useContext(CartContext)
    const navigate = useNavigate()

    //Create state to control Modal
    const [isOpen, setIsOpen] = React.useState(false)
    
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        console.log(cartItems[i]?.price);
        total += cartItems[i]?.price;
    }
    console.log(total);

    const handleCheckout = () => {
        clearBasket();
        navigate('/')
    }


  return (
    <div className='checkout-page'>
        <div className='checkout-container'>
            <div className='checkout-info'>
                <p>Item</p>
                <div className='items-info'>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Remove</p>
                </div>
            </div>
            <div className='products-added'>
                {
                    cartItems.length > 0 ?
                    cartItems.map(item => {
                        return (
                            <div className='product'>
                                <div className='prod-title'>
                                    <img src={item?.image} />
                                    <Link to={`/details/${item?.id}`}><p>{item?.title}</p></Link>
                                </div>
                                <div className='prod-details'>
                                    <p className='prod-price'>{item?.price}€</p>
                                    <p>1</p>
                                    <MdOutlineDelete className='delete-icon' onClick={() => removeItem(item?.id)}/>
                                </div>
                            </div>
                        )
                    })
                    :
                    <p className='no-item'>No Item added yet</p>
                }
                <div className='total-container'>
                    <div className='total-price'>
                        <p>Total</p>
                        <p>{total.toFixed(2)}€</p>
                    </div>
                    <button onClick={() => setIsOpen(true)}>Checkout</button>
                    <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Contact Us Modal"
                    >
                        <div className='modal-container'>
                        <h3 className='modal-header'>Your Order was successful!</h3>
                        <p className='modal-content'>Your Order was successful! Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                        <button className='modal-btn' onClick={handleCheckout}>Return to Main Page </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
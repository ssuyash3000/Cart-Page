import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {

    render(){
        //object De-Structuring
        
        return (
        <div className='cart'>
            <h1>Cart</h1>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        )
    }
}

export default Cart;
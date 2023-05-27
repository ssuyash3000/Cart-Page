import React from 'react';
import CartItem from './CartItem';
// class Cart extends React.Component {
const Cart = (props) => {
    // render(){
    const {
        products,
        onIncQuantity,
        onDecQuantity,
        onDeleteProduct,
    } = props;
    return (
    <div className='cart'>
        <h1>Cart</h1>
        {         
        products.map((prod)=>{
            return  (<CartItem product={prod} key={prod.id}
                    onIncQuantity={onIncQuantity}
                    onDecQuantity={onDecQuantity}
                    onDeleteProduct={onDeleteProduct}
                    />);
        })
        }
        {/* <CartItem qty={1} price={99} title={"Watch"}/> */}

    </div>
    );
    //}
}

export default Cart;
import React from 'react';
import plus from './assets/plus.png';
import minus from './assets/minus.png';
import deleteIcon from './assets/delete.png';

// class CartItem extends React.Component {
const CartItem = (props) => {
    // render(){
    // console.log(this.props) //When Component is class component then we access porps using this reference 
    //object De-Structuring
    const {product, onIncQuantity,  onDecQuantity, onDeleteProduct} = props;
    const {price, title, qty} = product;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img alt="productpic" style={styles.image} src={product.img}/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:25}} >{title}</div>
                <div style={{color:'#777'}} >One item price ₹ {price}/-</div>
                <div style={{color:'#777'}} >Qty: {qty}</div>
                <div style={{color:'#777'}} >Total Price ₹ {price*qty}/-</div>
            </div>
            <div className='cart-item-actions'>
                {/* Buttons to be added */}
                <img alt="plusButton"
                className='action-icons' 
                src={plus}
                onClick={()=>{onIncQuantity(product)}}
                />
                <img alt="minusButton"
                className='action-icons'
                src={minus}
                onClick={()=>{onDecQuantity(product)}}
                />
                <img alt="deleteButton"
                className='action-icons' 
                src={deleteIcon}
                onClick={()=>{onDeleteProduct(product.id)}}
                />

            </div>
        </div>
    );
    //}
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}
export default CartItem;
import React from 'react';
import plus from './assets/plus.png';
import minus from './assets/minus.png';
import deleteIcon from './assets/delete.png';
class CartItem extends React.Component {


    render(){
        //object De-Structuring
        // console.log(this.props)
        const {price, title, qty} = this.props.product;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt="productpic" style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}} >{title}</div>
                    <div style={{color:'#777'}} >Rs {price}</div>
                    <div style={{color:'#777'}} >Qty: {qty}</div>
                </div>
                <div className='cart-item-actions'>
                    {/* Buttons to be added */}
                    <img alt="plusButton"
                     className='action-icons' 
                    src={plus}
                    onClick={()=>{this.props.onIncQuantity(this.props.product)}}
                    />
                    <img alt="minusButton"
                     className='action-icons'
                    src={minus}
                    onClick={()=>{this.props.onDecQuantity(this.props.product)}}
                    />
                    <img alt="deleteButton"
                     className='action-icons' 
                    src={deleteIcon}
                    onClick={()=>{this.props.onDeleteProduct(this.props.product.id)}}
                    />

                </div>
            </div>
        )
    }
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
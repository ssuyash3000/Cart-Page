import React from 'react';
import plus from './assets/plus.png';
import minus from './assets/minus.png';
import deleteIcon from './assets/delete.png';
class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
      //  this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        this.setState(
        {qty: this.state.qty + 1,} 
        ,() => { console.log('this state',this.state);}
        );
        this.setState(
        {qty: this.state.qty + 1,} 
        ,() => { console.log('this state',this.state);}
        );
        this.setState(
        {qty: this.state.qty + 5,} 
        ,() => { console.log('this state',this.state);}
        );
    }
    decreaseQuantity = () => {
        //destructuring object
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty: prevState.qty - 1,
            }
        }, () => { 
            console.log('this state',this.state);
        });
       
    }
    render(){
        //object De-Structuring
        const {price, title, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}} >{title}</div>
                    <div style={{color:'#777'}} >Rs {price}</div>
                    <div style={{color:'#777'}} >Qty: {qty}</div>
                </div>
                <div className='cart-item-actions'>
                    {/* Buttons to be added */}
                    <img 
                    alt='increase' className='action-icons' 
                    src={plus}
                    onClick={this.increaseQuantity}
                    />
                    <img 
                    alt='decrease' className='action-icons'
                    src={minus}
                    onClick={this.decreaseQuantity}
                    />
                    <img
                    alt='deleteIcon' className='action-icons' 
                    src={deleteIcon}
                    onClick={this.increaseQuantity}
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
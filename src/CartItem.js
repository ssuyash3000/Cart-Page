import React from 'react';
import plus from './assets/plus.png';
import minus from './assets/minus.png';
import deleteIcon from './assets/delete.png';
class CartItem extends React.Component {
    render(){
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}} >Phone</div>
                    <div style={{color:'#777'}} >Rs 999</div>
                    <div style={{color:'#777'}} >Qty: 1</div>
                </div>
                <div className='cart-item-actions'>
                    {/* Buttons to be added */}
                    <img alt='increase' className='action-icons' src={plus}/>
                    <img alt='decrease' className='action-icons'src={minus}/>
                    <img alt='deleteIcon' className='action-icons' src={deleteIcon}/>

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
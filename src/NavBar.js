import React from 'react';
import cartIcon from './assets/shopping-cart.png';
class NavBar extends React.Component {


    render(){
 
        return (
            <div style={styles.nav} className='nav-bar'>
                <div style={styles.cartIconContainer}>
                <img  style={styles.cartIcon} alt="cart-icon" src={cartIcon} />
                <span style={styles.cartCount} id="product-count">4</span>
                </div>
            </div>
        )
    }
}
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative',
      marginRight: 10,
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  
export default NavBar;
import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor (){
        super();
        this.state = {
           products: [
            { 
                price: 99,
                title: "Watch",
                qty: 1,
                img: '',
                id: 1,
            },
            {
                price: 99,
                title: "Shoes",
                qty: 1,
                img: '',
                id: 2,
            }
           ]
        }
    }
    handleIncQuantity = (prod) =>{
        // console.log("Inc Quantity of " + prod.title);
        //fetching the prodcuts array
        const products = this.state.products;
        //searching for the required product
        const index = products.indexOf(prod);
        products[index].qty += 1;
        this.setState({
            products:products,
        });
    } 
    handleDecQuantity = (prod) =>{
        // console.log("Dec Quantity of " + prod.title);
        //fetching the prodcuts array
        const products = this.state.products;
        //searching for the required product
        const index = products.indexOf(prod);
        if(products[index].qty === 0)
            return;
        products[index].qty -= 1;
        this.setState({
            products:products,
        });
    } 
    render(){
        return (
        <div className='cart'>
            <h1>Cart</h1>
            {         
            this.state.products.map((prod)=>{
                return  <CartItem product={prod} key={prod.id}
                        onIncQuantity={this.handleIncQuantity}
                        onDecQuantity={this.handleDecQuantity}
                        />
            })
            }
            {/* <CartItem qty={1} price={99} title={"Watch"}/> */}

        </div>
        )
    }
}

export default Cart;
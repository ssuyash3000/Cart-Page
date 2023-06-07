import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
class App extends React.Component {
  constructor (){
    super();
    this.state = {

      products: [],//we will fetch data from firebase 
      //  products: [
      //   { 
      //       price: 99,
      //       title: "Watch",
      //       qty: 1,
      //       img: 'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      //       id: 1,
      //   },
      //   {
      //       price: 99,
      //       title: "Shoes",
      //       qty: 1,
      //       img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      //       id: 2,
      //   }
      //  ]
    }
}
componentDidMount () {
  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      console.log(snapshot);
    })
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
handleDeleteProduct = (id) => {
    //fetching the prodcuts array
   const prodcuts = this.state.products;
   const items = prodcuts.filter((prod)=>{
                   return prod.id !== id;
               });
   this.setState({
       products: items,
   });
}
handleDecQuantity = (prod) =>{
    // console.log("Dec Quantity of " + prod.title);
    //fetching the prodcuts array
    const products = this.state.products;
    //searching for the required product
    const index = products.indexOf(prod);
    products[index].qty -= 1;
    if(products[index].qty === 0){
        this.handleDeleteProduct(products[index].id);
        return;
    }
    this.setState({
        products:products,
    });
} 
getProdcutCountCost = () => {
  let count = 0;
  let cost = 0;
  this.state.products.forEach((prod) => {
    count += prod.qty;
    cost += prod.qty*prod.price;
  });
  return {
    count: count,
    cost: cost,
  }

}
  render() {
    return (
      <div className="App">
        <NavBar count={this.getProdcutCountCost().count}/>
        <Cart
          products={this.state.products} 
          onIncQuantity={this.handleIncQuantity}
          onDecQuantity={this.handleDecQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <h2>Total Cost: ₹{this.getProdcutCountCost().cost}/-</h2>
      </div>
    );
  }
}
export default App;




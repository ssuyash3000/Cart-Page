import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
class App extends React.Component {
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
getProdcutCount = () => {
  let count = 0;

  this.state.products.forEach((prod) => {
    count += prod.qty;
  });
  return count;

}
  render() {
    return (
      <div className="App">
        <NavBar count={this.getProdcutCount()}/>
        <Cart
          products={this.state.products} 
          onIncQuantity={this.handleIncQuantity}
          onDecQuantity={this.handleDecQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}
export default App;




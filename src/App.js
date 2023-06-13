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
      loader: true,
      db: firebase.firestore().collection('products'),
    }
}
componentDidMount () {
    // firebase
    // .firestore()
    // .collection('products')
    this.state.db
    .onSnapshot((snapshot)=>{
      //console.log(snapshot);

      const prod =  snapshot.docs.map((document) => {
          const data = document.data();
          data['id'] = document.id;
          return data;
        });

      this.setState({
        products: prod,
        loader: false,
      });

    });
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot)=>{
  //     console.log(snapshot);

  //     // snapshot.docs.map((document) => {
  //     //   console.log(document.data());
  //     // });
  //     const prod =  snapshot.docs.map((document) => {
  //         const data = document.data();
  //         data['id'] = document.id;
  //         return data;
  //       });
  //     this.setState({
  //       products: prod,
  //       loader: false,
  //     });
  //   });
}
handleIncQuantity = (prod) =>{
    // console.log("Inc Quantity of " + prod.title);
    //fetching the prodcuts array
    const products = this.state.products;
    //searching for the required product
    const index = products.indexOf(prod);
    //console.log((products[index]));
    const prodRef = this.state.db.doc(products[index].id);

    prodRef.update({
      qty: products[index].qty + 1,
    }).then(()=>{
      console.log("Inc Updation Success");
    })
    // products[index].qty += 1;
    // this.setState({
    //     products:products,
    // });
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
    // products[index].qty -= 1;
    // if(products[index].qty === 0){
    //     this.handleDeleteProduct(products[index].id);
    //     return;
    // }
    // this.setState({
    //     products:products,
    // });
    const prodRef = this.state.db.doc(products[index].id);

    prodRef.update({
      qty: products[index].qty - 1,
    }).then(()=>{
      console.log("Dec Updation Success");
    })
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
handleAddProd = () => {
  //firebase.firestore.collection('products') -> Since this is being used again and again
  // we will store the refrence to this DB in our state 
  this.state.db.add({
    img: '',
    title: 'Washing Machine',
    price: 5999,
    qty: 2,

  }).then((docRef)=>{
    console.log(docRef);
  }).catch(()=>{
    console.log("Error in adding product")
  }) 
  
}
  render() {
    return (
      <div className="App">
        <NavBar count={this.getProdcutCountCost().count}/>
        <button onClick={this.handleAddProd} style={{padding: 20, font: 20}}>Add Product</button>
        {this.state.loader === true && <h1>Loading Data...</h1>}
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




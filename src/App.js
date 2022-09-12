import './App.css';
import { useState } from 'react';
import NavBar from "./components/NavBar/index"
import DisplayProduct from "./components/Product/index"
import Image1Thumb from "./components/Images/image-product-1.jpg"

function App() {
    const [itemCount, setItemCount] = useState(0)
    const [shoppingCart, setShoppingCart] = useState([])

    const item = {
        name: "Fall Limited Edition Sneakers",
        price: 125.00,
        image: Image1Thumb,
        count: itemCount,
        id: 1
    }

    function deleteItem() {
      setShoppingCart([])
    }

    function subtraction() {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        } 
    }

    function addition() {
        setItemCount(itemCount + 1)
    }

    function handleChange(e) {
      setItemCount(e.target.value)
    }


    function addToCart() {
        if (shoppingCart.length === 0) {
            setShoppingCart({item}) 
        } else {
            setShoppingCart(prevState => ({
                ...prevState,
                item: {
                    ...prevState.item,
                    count: prevState.item.count + itemCount
                }
            }))
            
        }
        setItemCount(0)
    }

  return (
    <div>
      <NavBar shoppingCart={shoppingCart} deleteItem={deleteItem}/>
      <DisplayProduct subtraction={subtraction} addition={addition} addToCart={addToCart} itemCount={itemCount} handleChange={handleChange}/>
    </div>
  );
}

export default App;

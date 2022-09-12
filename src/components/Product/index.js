import ItemsDisplay from "./ProductElements"
import ProductImage from "./ProductImage"

function DisplayProduct({subtraction, addition, addToCart, itemCount, handleChange}) {
    return (
        <div className="product-container">
            <ProductImage />
            <ItemsDisplay subtraction={subtraction} addition={addition} addToCart={addToCart} itemCount={itemCount} handleChange={handleChange}/>
        </div>
    )
}

export default DisplayProduct
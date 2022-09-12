import NavLinks from "./NavbarElements"

function NavBar({shoppingCart, deleteItem}) {
    return (
        <nav>
            <NavLinks shoppingCart={shoppingCart} deleteItem={deleteItem}/>
        </nav>
    )
}

export default NavBar

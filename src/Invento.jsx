import { useEffect, useContext } from "react"
import CreateProduct from "./components/invento/CreateProduct"
import { Footer } from "./components/invento/Footer"
import Header from "./components/invento/Header"
import ProductInventory from "./components/invento/ProductInventory"
import { ProductsContext } from "./context/ProductsContext"

const Invento = () => {
    const { products } = useContext(ProductsContext);
    //a state to manage all the products that has been added to the inventory
    useEffect(() => {
        console.log("I ran")
    }, [products])

    return (
        <div className="container">
            <Header />
            <CreateProduct />
            <ProductInventory />
            <Footer />
        </div>
    )
}

export default Invento
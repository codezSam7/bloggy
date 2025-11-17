import { createContext, useState } from "react";


const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    //assume that we send a request to an endpoint and it returns the data below
    const dummy = [
        {
            id: 1,
            name: "Hp Laptop core i7 frameless, touchscreen, light",
            qty: 1
        },
        {
            id: 2,
            name: "Dell Laptop core i7 frameless, touchscreen, light",
            qty: 1
        }
    ]
    const [products, setProducts] = useState(dummy);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider }
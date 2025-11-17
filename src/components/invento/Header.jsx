import { useContext } from 'react'
import { AppNameContext } from '../../context/AppNameContext'
import { ProductsContext } from '../../context/ProductsContext'

const Header = () => {

    const { theme } = useContext(AppNameContext);
    const { products } = useContext(ProductsContext);


    return (
        <>
            {/* header section begins */}
            <div className="row header" id={theme}>
                <div className="col text-center">
                    <h1 className="mb-3"> Product Inventory </h1>
                    <button type="button" className="btn btn-primary">
                        Count <span className="badge mine">{products.length}</span>
                    </button>
                    <h3>Current Theme: {theme} </h3>
                </div>
            </div>
            {/* header section ends */}
        </>

    )
}

export default Header
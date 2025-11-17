import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext';

const ProductInventory = () => {
    const { products, setProducts } = useContext(ProductsContext);

    function deleteProduct(idToDelete) {
        let updatedProducts = products.filter(function (prod) {
            return prod.id != idToDelete
        });
        setProducts(updatedProducts);
    }


    return (
        <>
            {/* content  section begins */}
            <div className="row products text-center">
                <div className="col-md-6 offset-md-3">
                    <h3>Products Inventory </h3>
                </div>
                <div className="col-md-8 offset-md-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(function (pro, index) {
                                return (
                                    <tr key={pro.id}>
                                        <td>{index + 1}</td>
                                        <td>{pro.name}</td>
                                        <td>{pro.qty}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={() => { deleteProduct(pro.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* content  section ends */}
        </>

    )
}

export default ProductInventory
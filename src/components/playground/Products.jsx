const Products = ({ products }) => {
    //console.log(props.products)
    //console.log(products);

    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Products List</h1>
                <ul className="list-group">
                    {products && products.map((product, index) => {
                        return (
                            <li className="list-group-item" key={index}>{product}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Products
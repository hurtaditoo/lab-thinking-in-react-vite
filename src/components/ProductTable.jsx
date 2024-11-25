import ProductRow from "./ProductRow";

function ProductTable({ products }) {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }} >
            <thead style={{ backgroundColor: "#f9f9f9" }} >
                <tr style={{ padding: "8px", textAlign: "center", borderBottom: "1px solid #ddd" }} >
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;
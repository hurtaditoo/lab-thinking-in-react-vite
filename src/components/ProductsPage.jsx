// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={jsonData} />
    </div>
  );
}

export default ProductsPage;
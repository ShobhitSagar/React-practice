import React from "react";
import prodData from "./vsProducts";
import Product from "./Product";

function Products() {
	const data = prodData.map((item) => <Product product={item} />);
	return <div>{data}</div>;
}

export default Products;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import Search from "../Search/Search";

function Shop() {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    async function fetchProducts(data) {
        const requestURL = `https://api.mercadolibre.com/sites/${id}/search?q=${data}`;
        const getProduct = await fetch(requestURL);
        const getJSON = await getProduct.json();

        setProducts(getJSON);
    }

    return (
        <section className="shop">
            <Search callback={fetchProducts} />
            <Products articles={products} />
        </section>
    );
}

export default Shop;

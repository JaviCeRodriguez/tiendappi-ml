import React from "react";
import Search from "../Search/Search";
import Products from "../Products/Products";

function Shop(props) {
    // const { site } = props.zoneValue;

    return (
        <section className="shop">
            <Search />
            <Products />
        </section>
    );
}

export default Shop;

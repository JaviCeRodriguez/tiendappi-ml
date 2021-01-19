import React from "react";
import Card from "../Card/Card";

function Products(props) {
    const { results } = props.articles;
    console.log(results);
    return (
        <>
            <Card />
            <Card />
        </>
    );
}

export default Products;

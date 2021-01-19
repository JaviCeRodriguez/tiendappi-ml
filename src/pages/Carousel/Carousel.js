import React from "react";
import { useParams } from "react-router-dom";

function Carousel() {
    const { id } = useParams();
    return <div>Productos de la nación {id}</div>;
}

export default Carousel;

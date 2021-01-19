import React from "react";
import Error from "../../components/Error/Error";
import Shop from "../../components/Shop/Shop";
import "./Carousel.css";
import arrCountries from "../../countries.json";
import { useParams } from "react-router-dom";

function Carousel() {
    const { id } = useParams();

    function filterCode(obj) {
        return obj.code === id;
    }

    let filterId = arrCountries.filter(filterCode);

    if (filterId.length === 0) {
        return <Error errorValue="404" />;
    } else {
        return <Shop zoneValue={id} />;
    }
}

export default Carousel;

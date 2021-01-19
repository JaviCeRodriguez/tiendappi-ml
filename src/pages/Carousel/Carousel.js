import React from "react";
import Error from "../../components/Error/Error";
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
        return <>Pass</>;
    }
}

export default Carousel;

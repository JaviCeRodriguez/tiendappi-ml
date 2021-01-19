import React from "react";
import { Link } from "react-router-dom";

function Country(props) {
    const { country, code, flag } = props.value;

    return (
        <Link to={`/carousel/${code}`}>
            <img src={`../../../images/${flag}.png`} alt="flag" /> / {country}
        </Link>
    );
}

export default Country;

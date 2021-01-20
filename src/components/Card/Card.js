import React from "react";

function Card(props) {
    const { title, thumbail, price, permalink } = props;
    return (
        <div className="card">
            <a href={permalink} alt={title}>
                <img src={thumbail} alt={title} />
                <div>
                    <label>$ {price}</label>
                    <h4>{title}</h4>
                </div>
            </a>
        </div>
    );
}

export default Card;

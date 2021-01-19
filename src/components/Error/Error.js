import React from "react";

function Error(props) {
    const errorValue = props.errorValue;

    return (
        <section className="error">
            <h1>Error {errorValue} :(</h1>
            <p>
                Ups. ¿Estás seguro que este es el lugar al que querías llegar?
            </p>
        </section>
    );
}

export default Error;

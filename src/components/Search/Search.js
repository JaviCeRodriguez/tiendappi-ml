import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search(props) {
    const [article, setArticle] = useState("");

    function handleChange(e) {
        const { value } = e.target;
        setArticle(value);
    }

    function handleClick() {
        props.callback(article);
    }

    return (
        <section className="search">
            <Link to="/">
                <img
                    src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png"
                    alt="logo"
                />
            </Link>
            <div>
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Buscar</button>
            </div>
        </section>
    );
}

export default Search;

import React from "react";

function Search() {
    return (
        <section className="search">
            <img
                src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png"
                alt="logo"
            />
            <div>
                <input type="text" placeholder="Buscar producto..." />
                <button>Buscar</button>
            </div>
        </section>
    );
}

export default Search;

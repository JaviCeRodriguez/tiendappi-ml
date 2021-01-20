import Card from "../Card/Card";

function Products(props) {
    const { results } = props.articles;
    return (
        <section className="products">
            {results === undefined ? (
                <p>Busque un producto en el buscador de arriba! :D</p>
            ) : (
                Object.keys(results).map((item, key) => {
                    const { title, thumbnail, price, permalink } = results[
                        item
                    ];
                    return (
                        <Card
                            title={title}
                            thumbail={thumbnail}
                            price={price}
                            permalink={permalink}
                            key={key}
                        />
                    );
                })
            )}
        </section>
    );
}

export default Products;

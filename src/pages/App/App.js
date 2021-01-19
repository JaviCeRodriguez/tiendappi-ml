import React from "react";
import Country from "../../components/Country/Country";
import arrCountries from "../../countries.json";
import "./App.css";

function App() {
    return (
        <section className="home">
            <img
                src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0"
                alt="logo"
                className="logoApp"
            ></img>
            <ul>
                {arrCountries.map((value, key) => {
                    return (
                        <li>
                            <Country value={value} key={key} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default App;

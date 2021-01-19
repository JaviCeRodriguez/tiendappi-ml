import React from "react";
import Country from "../../components/Country/Country";
import arrCountries from "../../countries.json";
import "./App.css";

function App() {
    return (
        <ul>
            {arrCountries.map((value, key) => {
                return (
                    <li>
                        <Country value={value} key={key} />
                    </li>
                );
            })}
        </ul>
    );
}

export default App;

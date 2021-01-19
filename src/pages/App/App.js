import React from "react";
import Country from "../../components/Country/Country";
import "./App.css";

function App() {
    const arrCountries = [
        {
            country: "Argentina",
            code: "MLA",
            flag: "asad",
        },
        {
            country: "Bolivia",
            code: "MBO",
            flag: "asad",
        },
        {
            country: "Brasil",
            code: "MLB",
            flag: "asad",
        },
        {
            country: "Colombia",
            code: "MCO",
            flag: "asad",
        },
    ];
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

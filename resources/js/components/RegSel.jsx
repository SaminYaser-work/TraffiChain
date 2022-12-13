import axios from "axios";
import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";

function Example() {
    const [text, setText] = useState([]);

    useEffect(() => {
        var options = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/regtext",
        };

        axios
            .request(options)
            .then(function (response) {
                setText(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    console.log(text);

    return (
        <>
            {text.map((item, index) => {
                return (
                    <a
                        href={item.link}
                        key={index}
                        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </h5>

                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {item.text}
                        </p>
                    </a>
                );
            })}
        </>
    );
}

export default Example;

if (document.getElementById("regsel")) {
    console.log("Using react to render registration selection");
    ReactDOM.render(<Example />, document.getElementById("regsel"));
}

import axios from "axios";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

function Lab() {
    const [info, setInfo] = useState([]);
    const p = useRef();

    const handleClick = (e) => {
        var options = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/get-drivers",
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .then((data) => {
                setInfo(data);
            })
            .catch(function (error) {
                console.error(error);
            });

        console.log(info);
    };

    return (
        <>
            <h2 className="text-2xl mb-5">Axios Lab Task</h2>
            <div className="flex flex-col justify-center align-middle">
                <button
                    onClick={handleClick}
                    className="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed"
                >
                    Get Drivers
                </button>
                <p ref={p}>{info.id}</p>
            </div>
        </>
    );
}

export default Lab;

if (document.getElementById("lab")) {
    ReactDOM.render(<Lab />, document.getElementById("lab"));
} else {
    console.log("lab element not found to render react component");
}

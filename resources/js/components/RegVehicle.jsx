import axios from "axios";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

function RegVehicle() {
    const [data, setData] = useState({});
    const msg = useRef();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        setData(formDataObj);

        console.log(data);

        axios
            .post("/api/reg-vehicle", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                msg.current.classList.remove("hidden");
            });
    };

    return (
        <>
            <div ref={msg} className="hidden">
                <div
                    className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                    role="alert"
                >
                    <svg
                        aria-hidden="true"
                        className="flex-shrink-0 inline w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Success!</span> Your
                        vehicle is registered.
                    </div>
                </div>
            </div>
            <form
                action="/profile/vehicle"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="text"
                        name="model"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        value={data.model || ""}
                        onChange={handleChange}
                    />

                    <label
                        htmlFor="model"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Model Name
                    </label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="text"
                        name="chassis"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={data.chassis || ""}
                        onChange={handleChange}
                    />

                    <label
                        htmlFor="chassis"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Chassis No.
                    </label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="underline_select" className="sr-only">
                            Vehicle
                        </label>
                        <select
                            id="underline_select"
                            name="class"
                            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={data.class || ""}
                            onChange={handleChange}
                        >
                            <option defaultValue={true}>Choose a class</option>
                            <option value="sedan">Sedan</option>
                            <option value="bus/truck">Bus/Truck</option>
                            <option value="motorbike">Motorbike</option>
                            <option value="suv">SUV</option>
                        </select>
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="underline_select2" className="sr-only">
                            Vehicle Type
                        </label>
                        <select
                            id="underline_select2"
                            name="type"
                            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={data.type || ""}
                            onChange={handleChange}
                        >
                            <option defaultValue={true}>Choose a type</option>
                            <option value="government">Government</option>
                            <option value="special">Special</option>
                            <option value="civilian">Civilian</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default RegVehicle;

if (document.getElementById("regVehicle__react")) {
    ReactDOM.render(
        <RegVehicle />,
        document.getElementById("regVehicle__react")
    );
}

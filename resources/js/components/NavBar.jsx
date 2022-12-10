import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.png";

function NavBar() {
    const [accType, setAccType] = useState("");

    useEffect(() => {
        axios.get("/api/accType").then((res) => {
            setAccType(res.data);
        });
    }, []);

    return (
        <>
            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-transparent">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href={"/home"} className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9"
                            alt="TraffiChain Logo"
                        />

                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            TraffiChain
                        </span>
                    </a>

                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>

                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="flex flex-col items-center gap-3 justify-center p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-transparent md:bg-transparent border-gray-700">
                            <li>
                                <a
                                    href={"/home"}
                                    className="block py-2 px-4 text-white bg-amber-500 rounded"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href={"/register"}
                                    className="block py-2 px-4 text-white bg-slate-300 rounded"
                                >
                                    Register
                                </a>
                            </li>

                            <li>
                                {window.accType != "" ? (
                                    <a
                                        href={"/logout"}
                                        className="block py-2 px-4 text-white bg-red-700 rounded"
                                    >
                                        Logout
                                    </a>
                                ) : (
                                    <a
                                        href={"/login"}
                                        className="block py-2 px-4 text-white bg-green-700 rounded"
                                    >
                                        Login
                                    </a>
                                )}
                            </li>

                            {window.accType != "" && (
                                <li>
                                    <a
                                        href={"/profile/support"}
                                        className="block py-2 px-3 text-white bg-red-500 rounded"
                                    >
                                        Support
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

if (document.getElementById("navbar__react")) {
    ReactDOM.render(<NavBar />, document.getElementById("navbar__react"));
} else {
    console.log("element not found to render navbar react component");
}

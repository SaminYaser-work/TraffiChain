import React from "react";
import ReactDOM from "react-dom";

import logo from "./logo.png";

function Footer() {
    return (
        <>
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href={"/home"}
                        className="flex items-center mb-4 sm:mb-0"
                    >
                        <img
                            src={logo}
                            className="mr-3 h-8"
                            alt="TraffiChain Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            TraffiChain
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href={"/home"}
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href={"/register"}
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Register
                            </a>
                        </li>
                        <li>
                            <a
                                href={"/login"}
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022{" "}
                    <a href={"/home"} className="hover:underline">
                        TraffiChain™
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </>
    );
}

export default Footer;

if (document.getElementById("footer__react")) {
    ReactDOM.render(<Footer />, document.getElementById("footer__react"));
} else {
    console.log("element not found to render react footer component");
}

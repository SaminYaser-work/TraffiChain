import React from "react";

import ReactDOM from "react-dom";

function Example() {
    return (
        <>
            <a
                href={"/register/driver"}
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    🚘 Driver
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Register as a driver or owner, add your vehicle, see active
                    tickets, and more.
                </p>
            </a>

            <a
                href={"/register/police"}
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    👮 Police
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Register as a police officer, see issued tickets, and more.
                </p>
            </a>

            <a
                href={"/register/judge"}
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    🧑‍⚖️ Judge
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Register as a judge, manage ongoing cases, and more.
                </p>
            </a>
        </>
    );
}

export default Example;

if (document.getElementById("regsel")) {
    console.log("Using react to render registration selection");
    ReactDOM.render(<Example />, document.getElementById("regsel"));
}

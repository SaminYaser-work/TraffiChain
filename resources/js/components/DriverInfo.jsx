import axios from "axios";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function DriverInfo() {
    const [info, setInfo] = React.useState({
        id: 0,
        WALLET_ADDRESS: "",
        NAME: "Loading...",
        NID: "Loading...",
        LICENSE_NUMBER: "Loading...",
        LICENSE_EXPIRY_DATE: "Loading...",
        LICENSE_ISSUE_DATE: "Loading...",
        SCORE: 0,
    });

    useEffect(() => {
        const options = {
            method: "POST",
            url: "http://127.0.0.1:8000/api/profileInfo",
            params: { id: window.id },
            headers: { Accept: "application/json" },
        };

        axios
            .request(options)
            .then(function (response) {
                setInfo(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    console.log(info);

    return (
        <>
            <div className="flex justify-start align-middle py-2">
                <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-8 h-8 mr-3 self-baseline"
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

                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Your Information
                </h5>
            </div>

            <table className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr>
                        <th className="text-left pr-5">Name</th>
                        <td>{info.NAME}</td>
                    </tr>
                    <tr>
                        <th className="text-left pr-5">NID</th>
                        <td>{info.NID}</td>
                    </tr>
                    <tr>
                        <th className="text-left pr-5">License No.</th>
                        <td>{info.LICENSE_NUMBER}</td>
                    </tr>
                    <tr>
                        <th className="text-left pr-5">Issue Date</th>
                        <td>{info.LICENSE_ISSUE_DATE}</td>
                    </tr>
                    <tr>
                        <th className="text-left pr-5">Expiration</th>
                        <td>{info.LICENSE_EXPIRY_DATE}</td>
                    </tr>
                </tbody>
            </table>

            <a
                href="/profile/update"
                className="inline-flex items-center text-blue-600 hover:underline"
            >
                Change Information
                <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
            </a>
        </>
    );
}

export default DriverInfo;

if (document.getElementById("driverinfo__react")) {
    ReactDOM.render(
        <DriverInfo />,
        document.getElementById("driverinfo__react")
    );
}

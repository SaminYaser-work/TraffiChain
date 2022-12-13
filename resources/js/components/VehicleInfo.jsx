import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function VehicleInfo() {
    const [vehicleInfo, setVehicleInfo] = useState([]);

    useEffect(() => {
        var options = {
            method: "POST",
            url: "http://127.0.0.1:8000/api/vehicleInfo",
            params: { id: window.id },
            headers: { Accept: "application/json" },
        };

        axios
            .request(options)
            .then(function (response) {
                setVehicleInfo(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    console.log(vehicleInfo);

    return (
        <>
            <div className="flex justify-start items-end py-2">
                <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-10 h-10 mr-3 self-baseline"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"
                        clipRule="evenodd"
                    ></path>
                </svg>

                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Your Vehicles
                </h5>
            </div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                {vehicleInfo.length != 0 ? (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Model
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Chassis Number
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    className
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Type
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicleInfo.map((vehicle, index) => {
                                return (
                                    <tr
                                        className="border-b border-gray-200 dark:border-gray-700"
                                        key={index}
                                    >
                                        <td className="py-3 px-6">
                                            {vehicle.MODEL}
                                        </td>
                                        <td className="py-3 px-6">
                                            {vehicle.CHASSIS_NUMBER}
                                        </td>
                                        <td className="py-3 px-6">
                                            {capitalizeFirstLetter(
                                                vehicle.CLASS
                                            )}
                                        </td>
                                        <td className="py-3 px-6">
                                            {capitalizeFirstLetter(
                                                vehicle.TYPE
                                            )}
                                        </td>
                                        <td className="py-3 px-6">
                                            {vehicle.STATUS}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-fit opacity-25"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                        </svg>

                        <p className="text-slate-500">No vehicles found.</p>
                    </div>
                )}
            </div>

            <a
                href="/profile/vehicle"
                className="mt-3 inline-flex items-center text-blue-600 hover:underline"
            >
                Register a new vehicle
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

export default VehicleInfo;

if (document.getElementById("vehicleinfo__react")) {
    ReactDOM.render(
        <VehicleInfo />,
        document.getElementById("vehicleinfo__react")
    );
}

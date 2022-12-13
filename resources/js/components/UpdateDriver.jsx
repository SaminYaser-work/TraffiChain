import axios from "axios";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function UpdateDriver() {
    const [driverInfo, setDriverInfo] = React.useState({
        id: 0,
        WALLET_ADDRESS: "",
        NAME: "",
        NID: 0,
        LICENSE_NUMBER: 0,
        LICENSE_EXPIRY_DATE: "",
        LICENSE_ISSUE_DATE: "",
        SCORE: 0,
    });

    const [errors, setErrors] = React.useState({});

    const succMsg = useRef();

    useEffect(() => {
        const options = {
            method: "POST",
            url: "http://127.0.0.1:8000/api/driverInfo",
            params: { id: window.id },
            headers: { Accept: "application/json" },
        };

        axios
            .request(options)
            .then(function (response) {
                setDriverInfo(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    const onChangeHandler = (e) => {
        setDriverInfo({
            ...driverInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let dataToSend = driverInfo;
        dataToSend["accType"] = window.accType;
        console.log(dataToSend);

        try {
            const res = await axios.post("/api/updateDriver", dataToSend);
            succMsg.current.classList.remove("hidden");
            setErrors({});
        } catch (err) {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        }
    };

    return (
        <>
            <div ref={succMsg} className="hidden">
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
                        profile has been updated.
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="text"
                        name="NAME"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={driverInfo.NAME || ""}
                        onChange={onChangeHandler}
                    />

                    <label
                        htmlFor="NAME"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name
                    </label>

                    {errors.NAME && (
                        <span className="text-red-600 text-xs">
                            {errors.NAME}
                        </span>
                    )}
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="number"
                        name="NID"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={driverInfo.NID || ""}
                        onChange={onChangeHandler}
                    />

                    <label
                        htmlFor="NID"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        NID
                    </label>

                    {errors.NID && (
                        <span className="text-red-600 text-xs">
                            {errors.NID}
                        </span>
                    )}
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="number"
                        name="LICENSE_NUMBER"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={driverInfo.LICENSE_NUMBER || ""}
                        onChange={onChangeHandler}
                    />

                    <label
                        name="LICENSE_NUMBER"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        License No.
                    </label>

                    {errors.LICENSE_NUMBER && (
                        <span className="text-red-600 text-xs">
                            {errors.LICENSE_NUMBER}
                        </span>
                    )}
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="date"
                            name="LICENSE_ISSUE_DATE"
                            id="floating_phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={driverInfo.LICENSE_ISSUE_DATE || ""}
                            onChange={onChangeHandler}
                        />
                        <label
                            name="LICENSE_ISSUE_DATE"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            License Issue
                        </label>

                        {errors.LICENSE_ISSUE_DATE && (
                            <span className="text-red-600 text-xs">
                                {errors.LICENSE_ISSUE_DATE}
                            </span>
                        )}
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="date"
                            name="LICENSE_EXPIRY_DATE"
                            id="floating_company"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={driverInfo.LICENSE_EXPIRY_DATE || ""}
                            onChange={onChangeHandler}
                        />
                        <label
                            htmlFor="LICENSE_EXPIRY_DATE"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            License Exp.
                        </label>

                        {errors.LICENSE_EXPIRY_DATE && (
                            <span className="text-red-600 text-xs">
                                {errors.LICENSE_EXPIRY_DATE}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex justify-center items-end gap-6">
                    <button
                        type="submit"
                        className="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed"
                    >
                        Update
                    </button>

                    <a
                        href="/profile"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Back
                    </a>
                </div>
            </form>
        </>
    );
}

export default UpdateDriver;

if (document.getElementById("updatedriver__react")) {
    ReactDOM.render(
        <UpdateDriver />,
        document.getElementById("updatedriver__react")
    );
}

import axios from "axios";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

function Support() {
    // Generate some Support Issues
    const options = [
        "Select an issue",
        "I can't access my account",
        "I can't access my dashboard",
        "I can't change my information",
        "I can't pay a ticket",
        "I can't contest a ticket",
        "I can't see my tickets",
        "My license is suspended",
        "I can't register my vehicle",
        "My score isn't updating",
    ];

    const [issues, setIssues] = useState("");
    const [message, setMessage] = useState("");
    const btn = useRef();
    const succMsg = useRef();

    const handleClick = async (e) => {
        if (issues == "" || message == "") {
            alert("Please fill out all fields");
            return;
        }

        btn.current.disabled = true;
        btn.current.innerHTML = "Submitting..";

        console.log(issues, message);

        // btn.current.disabled = false;
        // btn.current.innerHTML = "Send Message";

        try {
            const res = await axios.post("/api/submit-issue", {
                issues: issues,
                message: message,
                name: window.name,
                nid: window.nid,
            });

            console.log(res);

            if (res.status == 200) {
                succMsg.current.classList.remove("hidden");
                setIssues("");
                setMessage("");
            } else {
                succMsg.current.classList.add("hidden");
            }
        } catch (err) {
            console.log(err);
        } finally {
            btn.current.disabled = false;
            btn.current.innerHTML = "Submit";
        }
    };

    // console.log("issue:", issues);
    // console.log("message:", message);

    return (
        <div>
            <div className="hidden" ref={succMsg}>
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
                        <span className="font-medium">Success!</span> Your issue
                        has been submitted.
                    </div>
                </div>
            </div>

            <label
                htmlFor="issues"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                What issue are you having?
            </label>

            <select
                id="issues"
                onChange={(e) =>
                    setIssues(() => {
                        if (e.target.value == options[0]) {
                            return [];
                        }
                        return e.target.value;
                    })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                ))}
            </select>

            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
            >
                Describe your issue
            </label>
            <textarea
                id="message"
                rows="4"
                cols={"50"}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Message..."
                value={message}
            ></textarea>

            <div className="grid place-items-center">
                <button
                    type="button"
                    ref={btn}
                    onClick={handleClick}
                    className="mt-5 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Support;

if (document.getElementById("support__react")) {
    ReactDOM.render(<Support />, document.getElementById("support__react"));
} else {
    console.log("element not found to render react component");
}

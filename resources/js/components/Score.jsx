import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Score() {
    const [score, setScore] = useState("...");
    const [scoreComment, setScoreComment] = useState("");
    const [color, setColor] = useState("");

    useEffect(async () => {
        const tickets = await window.ticketContractFactory.getActiveTickets(
            window.wallet
        );
        console.log("tickets: ", tickets);

        const scr = 100 - tickets.length * 10;
        // const scr = 20;

        setScore(scr);

        var options = {
            method: "POST",
            url: "http://127.0.0.1:8000/api/getScoreComment",
            params: { score: scr },
        };

        try {
            const res = await axios.request(options);
            console.log(res.data);
            setScoreComment(res.data.comment);
            setColor(res.data.color);
        } catch (err) {
            console.log(err);
        }
    }, []);

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
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                        clipRule="evenodd"
                    ></path>
                </svg>

                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Your Score
                </h5>
            </div>

            <div className="flex flex-col items-center justify-center h-max gap-2">
                <p
                    id="scoreDisplay"
                    className={`text-6xl lg:text-8xl ${color}`}
                >
                    {score}
                </p>

                <p id="scoreComment" className={`text-center mt-3 ${color}`}>
                    {scoreComment}
                </p>
            </div>
        </>
    );
}

export default Score;

if (document.getElementById("score__react")) {
    ReactDOM.render(<Score />, document.getElementById("score__react"));
}

import React, { useState } from "react";
import { fetchData } from "./apiConnect/fetchApi";

import "./App.css";
import Loading from "./components/Loader";

export default () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [query, setQuery] = useState({});
    const [loadData, setLoadData] = useState(false);

    const apiCall = async () => {
        try {
            setLoadData(!loadData);
            const data = await fetchData(name1, name2);
            setQuery(data);
        } finally {
            setLoadData(false);
        }
    };
    return (
        <div className="container">
            {loadData ? <Loading /> : null}
            <h1 className="main-header">
                simple love calculator{" "}
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                </svg>
            </h1>

            <p className="app-description">
                <span>welcome</span> to simple love calculator, where you can calculate how you matches with your crush or your significant others by comparing both of your name using special algorithm.
            </p>
            <div className="form-input">
                <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="input first name.." /> <br />
                <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} placeholder="input second name.." /> <br />
                <button type="submit" onClick={apiCall}>
                    Calculate
                </button>
            </div>
            {query.percentage ? (
                name1.length !== 0 && name2.length !== 0 ? (
                    <p className="result">
                        The Algorithm said that {query.fname} & {query.sname} have a match percentage of {query.percentage}% {query.result}
                    </p>
                ) : <p className="result">You didn't input any name, please try again</p>
            ) : null}
        </div>
    );
};

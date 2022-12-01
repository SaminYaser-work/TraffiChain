import React from "react";
import ReactDOM from "react-dom";

function Example() {
    return (
        <>
            <h1 className="text-blue-600">React is working!</h1>
        </>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
} else {
    console.log("element not found to render react component");
}

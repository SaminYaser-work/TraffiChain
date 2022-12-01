import React from "react";
import ReactDOM from "react-dom";

function NavBar() {}

export default NavBar;

if (document.getElementById("navbar__react")) {
    ReactDOM.render(<NavBar />, document.getElementById("navbar__react"));
} else {
    console.log("element not found to render react component");
}

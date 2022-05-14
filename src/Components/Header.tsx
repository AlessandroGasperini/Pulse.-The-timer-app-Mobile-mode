import React from "react";
import logoHeader from "../assets/img/headerLog.png"

function Header() {
    return (
        <section>
            <img src={logoHeader} alt="" />
            <h1>.pulSe</h1>
        </section>
    );
}

export default Header;
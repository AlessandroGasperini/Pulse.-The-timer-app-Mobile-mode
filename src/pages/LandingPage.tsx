import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/pulse logo.png"

function LandingPage() {



    return (
        <Link to={"/SetTimer"}>
            <section>
                <h1>LandingPage</h1>
                <img src={logo} alt="bildlp" />
                <h1>PuLse</h1>
            </section>
        </Link>
    );

}

export default LandingPage;
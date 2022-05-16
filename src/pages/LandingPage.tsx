import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logoLanding.png"

function LandingPage() {



    return (
        <Link to={"/SetTimer"}>
            <section>
                <h1>LandingPage</h1>
                <img src={logo} alt="" />

            </section>
        </Link>
    );

}

export default LandingPage;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logoLanding.png"
import "./LandingPage.module.css"

function LandingPage() {

    return (
        <Link to={"/SetTimer"}>
            <section className="containerLP">

                <img src={logo} alt="" />

            </section>
        </Link>
    );
}

export default LandingPage;
import React from "react";
import { Link } from "react-router-dom";
import bell from "../assets/img/bell.png"
import styles from "./ModalStop.module.css"


function ModalStop() {

    function reset() {
        window.location.reload()
    }




    return (
        <section className="container">
            <h1>ModalStop</h1>


            <img className="bellShake" src={bell} alt="" />

            <Link to={"/setTimer"}>
                <button>Set new Time</button>
            </Link>

            <button onClick={() => reset()}>Reset</button>




        </section>
    );
}

export default ModalStop;
import React from "react";
import { Link } from "react-router-dom";
import bell from "../assets/img/bell.png"
import styles from "./ModalStop.module.css"
import resetModal from "../assets/img/resetModal.png"
import setNewTime from "../assets/img/setNewTime.png"
import "./ModalStop.module.css"

function ModalStop() {

    function reset() {
        window.location.reload()
    }




    return (
        <section className="container">

            <h1>S t o p</h1>

            <article className="shakeArt">
                <img className="bellShake" src={bell} alt="" />
            </article>

            <article className="btnArtModS">
                <Link to={"/setTimer"}>
                    <img src={setNewTime} alt="" />
                </Link>
                <img onClick={() => reset()} src={resetModal} alt="" />
            </article>






        </section>
    );
}

export default ModalStop;
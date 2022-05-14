import React from "react";
import { Link } from "react-router-dom";

function ModalStop() {

    function reset() {
        window.location.reload()
    }


    return (
        <section className="container">
            <h1>ModalStop</h1>

            <Link to={"/setTimer"}>
                <button>Set new Time</button>
            </Link>

            <button onClick={() => reset()}>Reset</button>

        </section>
    );
}

export default ModalStop;
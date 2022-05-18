import React from "react";
import useTimer from 'easytimer-react-hook';
import playPause from "../assets/img/playPause.png"


function ModalPause(props: any) {

    const [timer, isTargetAchieved] = useTimer({})

    function startAgain() {
        props.passFunction()
        props.modalHide(false)
    }
    console.log(props);

    return (
        <section className="container">
            <h1>P a u s e</h1>

            <section className="pauseCont">
                <img onClick={() => startAgain()} src={playPause} alt="" />
            </section>

            <h5 className="currentTime">{props.currentTime}</h5>

        </section>
    );
}

export default ModalPause;
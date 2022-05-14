import React from "react";
import useTimer from 'easytimer-react-hook';

function ModalPause(props: any) {

    const [timer, isTargetAchieved] = useTimer({})

    function startAgain() {
        props.passFunction()
        props.modalHide(false)
    }
    console.log(props);

    return (
        <section className="container">
            <h1>ModalPause</h1>


            <button onClick={() => startAgain()}>Start</button>


        </section>
    );
}

export default ModalPause;
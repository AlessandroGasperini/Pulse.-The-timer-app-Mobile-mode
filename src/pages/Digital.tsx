import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";

interface allTimes {
    hours?: number,
    minutes?: number,
    seconds?: number,
    countdown?: boolean
}

const Digital: React.FC<allTimes> = () => {

    const location: object | any = useLocation();

    const time: object | any = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true,
    });


    function start() {
        timer.start();
    };

    function pause() {
        timer.pause();
        setModalP(true)
    };

    function stop() {
        timer.stop();
    };


    function reset() {
        timer.reset();
    };

    const [modalP, setModalP] = useState<boolean>(false)
    const [modalS, setModalS] = useState<boolean>(false)

    const theTimeSec: number = timer.getTimeValues().seconds
    const theTimeMin: number = timer.getTimeValues().minutes
    const theTimeHour: number = timer.getTimeValues().hours


    useEffect(() => {
        if (theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setModalS(true)
        }
    }, [theTimeSec])


    return (
        <section>
            <Header header={"Timer Digital"} />

            <div>{timer.getTimeValues().toString()}</div>

            <button onClick={() => start()}>start</button>

            <button onClick={() => pause()}>pause</button>

            <button onClick={() => stop()}>stop</button>

            <button onClick={() => reset()}>reset</button>


            {modalP && <ModalPause currentTime={timer.getTimeValues().toString()} modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}


        </section>

    )
};

export default Digital
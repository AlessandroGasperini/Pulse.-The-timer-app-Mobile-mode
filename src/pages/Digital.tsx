import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";
import play from "../assets/img/play.png"
import pauseBtn from "../assets/img/pause.png"
import stopBtn from "../assets/img/stop.png"
import resetBtn from "../assets/img/reset.png"
import "./Digital.module.css"
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
        {
            timerOG == "red" ? intV.start() : null
        }
    };

    function pause() {
        timer.pause();
        setModalP(true)
        intV.pause()
    };

    function stop() {
        timer.stop();
        intV.stop()
    };


    function reset() {
        window.location.reload()
    };

    const [modalP, setModalP] = useState<boolean>(false)
    const [modalS, setModalS] = useState<boolean>(false)

    const theTimeSec: number = timer.getTimeValues().seconds
    const theTimeMin: number = timer.getTimeValues().minutes
    const theTimeHour: number = timer.getTimeValues().hours


    const [timerOG, setTimerOG] = useState<string>("hide")
    const [timerHide, setTimerHide] = useState<string>("timerShown")

    const [intV, setIntV] = useTimer({
        startValues: {
            minutes: 5
        }, countdown: true,
    });

    const [restart, setRestart] = useState<boolean>(false)

    useEffect(() => {
        if (time.intervall === true && theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setRestart(true)
            intV.start()
            setTimerOG("red")
            setTimerHide("hide")
        }
    }, [theTimeSec])

    useEffect(() => {
        if (intV.getTimeValues().toString() === "00:00:00" && restart === true) {
            timer.reset()
            setTimerOG("hide")
            setTimerHide("timerShown")
        }
    }, [intV.getTimeValues().toString()])

    useEffect(() => {
        if (time.intervall === false && theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setModalS(true)
        }
    }, [theTimeSec])

    return (
        <section className="containerD">
            <Header header={"Timer Digital"} />

            <div>
                <p className={timerHide} >{timer.getTimeValues().toString()}</p>
                <p className={timerOG}>{intV.getTimeValues().toString()}</p>
            </div>

            <section className="allBtnDigital">
                <img onClick={() => start()} src={play} alt="" />
                <img onClick={() => pause()} src={pauseBtn} alt="" />
                <img onClick={() => stop()} src={stopBtn} alt="" />
                <img onClick={() => reset()} src={resetBtn} alt="" />
            </section>


            {modalP && <ModalPause currentTime={timer.getTimeValues().toString()} modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}


        </section>

    )
};

export default Digital
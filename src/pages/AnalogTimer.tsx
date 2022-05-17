import React, { startTransition } from "react";
import { useLocation } from "react-router-dom";
import sekund from "../assets/img/sekund.png"
import clock from "../assets/img/clock.png"
import timpekare from "../assets/img/timpekare.png"
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useEffect } from "react";
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";

interface allTimes {
    hours?: number,
    minutes?: number,
    seconds?: number,
    countdown: boolean,
    intervall?: boolean
}

const AnalogTimer: React.FC<allTimes> = () => {


    const location: object | any = useLocation();

    const time: object | any = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true,
    });

    const [sec, setSec] = useState<string>("noRunSeconds")
    const [hours, setHours] = useState<string>("noRunMinutes")


    function start() {
        timer.start();
        setSec("sekundpekare")
        setHours("timpekare")
    };

    function pause() {
        timer.pause();
        setSec("pauseSecond")
        setHours("pauseHour")
        setModalP(true)
    };

    function stop() {
        timer.stop();
        setModalS(true)
    };

    function reset() {
        timer.reset();
        window.location.reload()
    };


    const [modalP, setModalP] = useState<boolean>(false)
    const [modalS, setModalS] = useState<boolean>(false)

    const theTimeSec: number = timer.getTimeValues().seconds
    const theTimeMin: number = timer.getTimeValues().minutes
    const theTimeHour: number = timer.getTimeValues().hours


    const [timerOG, setTimerOG] = useState<string>("hide")
    const [timerHide, setTimerHide] = useState<string>("showT")

    const [intV, setIntV] = useTimer({
        startValues: {
            seconds: 5
        }, countdown: true,
    });

    const [restart, setRestart] = useState<boolean>(false)
    useEffect(() => {
        if (time.intervall === true && theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setRestart(true)
            intV.start()
            setTimerOG("countD")
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
            setSec("pauseSecond")
            setHours("pauseHour")
        }
    }, [theTimeSec])





    return (
        <section className="containerAT">
            <Header header={"Timer Analog"} />
            <section className="clockSection">
                <img className="clock" src={clock} alt="" />
                <img className={sec} src={sekund} alt="" />
                <img className={hours} src={timpekare} alt="" />
                <div className={timerHide}>{timer.getTimeValues().toString()}</div>
                <p className={timerOG}>{intV.getTimeValues().toString()}</p>
            </section>

            <p>{intV.getTimeValues().toString()}</p>

            <button onClick={() => start()}>start</button>

            <button onClick={() => pause()}>pause</button>

            <button onClick={() => stop()}>stop</button>


            <button onClick={() => reset()}>reset</button>

            {modalP && <ModalPause currentTime={timer.getTimeValues().toString()} modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}

        </section>

    )
};

export default AnalogTimer
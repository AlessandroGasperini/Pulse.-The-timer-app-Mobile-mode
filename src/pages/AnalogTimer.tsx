import React from "react";
import { useLocation } from "react-router-dom";
import sekund from "../assets/img/sekund.png"
import clock from "../assets/img/clock.png"
import timpekare from "../assets/img/timpekare.png"
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useEffect } from "react";
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
interface allTimes {
    hours: number,
    minutes: number,
    seconds: number,
    targetDays: number,
    targetHours: number,
    targetMinutes: number,
    targetSeconds: number,
    countdown: boolean,
    updateWhenTargetAchieved: boolean
}

const AnalogTimer: React.FC<allTimes> = () => {

    const location: any = useLocation();

    const time = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        },
        target: {
            hours: time.targetHours,
            minutes: time.targetMinutes,
            seconds: time.targetSeconds
        },
        countdown: time.countdown,
        updateWhenTargetAchieved: time.updateWhenTargetAchieved
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


    useEffect(() => {
        if (theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setModalS(true)
            setSec("pauseSecond")
            setHours("pauseHour")
        }
    }, [theTimeSec])

    return (
        <section>

            <section className="clockSection">
                <img className="clock" src={clock} alt="" />
                <img className={sec} src={sekund} alt="" />
                <img className={hours} src={timpekare} alt="" />
                <div className="timer">{timer.getTimeValues().toString()}</div>

            </section>

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
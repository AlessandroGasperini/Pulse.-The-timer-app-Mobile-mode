
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import hitSpin from "../assets/img/hitSpin.png"
import hitArrow from "../assets/img/hitArrow.png"
import lapMark from "../assets/img/lapMark.png"
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";



const Hit: React.FC = () => {

    const location: any = useLocation();

    const time = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true,

    });

    const [hit, setHit] = useState<string>("stillMin")
    const [breath, setBreath] = useState<string>("pauseBreath")
    const [imgSpin, setImgSpin] = useState<string>(hitSpin)
    const [goRest, setGoRest] = useState<string>("")
    const [arrow, setArrow] = useState<string>(hitArrow)


    function start() {
        timer.start();
        setHit("spin")
        setGoRest("Go!")
    };

    function pause() {
        timer.pause();
        setModalP(true)
        seePause()
    };

    function seePause() {
        if (breath === "pauseBreath") {
            setHit("spinPause")
        }
    }



    function stop() {
        timer.stop();
        setModalS(true)
    };



    function reset() {
        window.location.reload()
    };

    const theTime = timer.getTimeValues().seconds
    const [lap, setLap] = useState<any>([])
    useEffect(() => {

        if (theTime === 30) {
            lap.push(1)
        }
    }, [theTime])


    useEffect(() => {
        if (theTime <= 30 && theTime != 0) {
            setHit("rest")
            setBreath("breath")
            setGoRest("Rest")
            setArrow("")
        } else if (theTime >= 30) {
            setImgSpin(hitSpin)
            setBreath("pauseBreath")
            setHit("spin")
            setGoRest("Go!")
            setArrow(hitArrow)
        }
    }, [theTime])

    let spinSec: string = "spinSection"

    if (timer.getTimeValues().minutes === 0 && timer.getTimeValues().seconds <= 30) {
        spinSec = "hideSec"

    }


    const [modalP, setModalP] = useState<boolean>(false)
    const [modalS, setModalS] = useState<boolean>(false)

    const theTimeSec: number = timer.getTimeValues().seconds
    const theTimeMin: number = timer.getTimeValues().minutes
    const theTimeHour: number = timer.getTimeValues().hours


    useEffect(() => {
        if (theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 30) {
            setModalS(true)
        }
    }, [theTimeSec])


    return (
        <section>
            <Header header={"HiT"} />
            <section>
                <img src={arrow} alt="" />
            </section>
            <section className={spinSec}>
                <img className={hit} src={imgSpin} alt="" />
                <div className={breath}></div>
                <h3>{goRest}</h3>
            </section>

            {lap.map((one: number, id: number) => (
                <img key={id} src={lapMark} alt="" />
            ))}

            <section>
                <button onClick={() => start()}>start</button>

                <button className={(breath === "breath") ? `${"hide"}` : ""} onClick={() => pause()}>pause</button>

                <button onClick={() => stop()}>stop</button>

                <button onClick={() => reset()}>reset</button>
            </section>

            {modalP && <ModalPause currentTime={timer.getTimeValues().toString()} modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}

        </section>

    )
};

export default Hit
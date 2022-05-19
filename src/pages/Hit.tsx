
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
import play from "../assets/img/play.png"
import pauseBtn from "../assets/img/pause.png"
import stopBtn from "../assets/img/stop.png"
import resetBtn from "../assets/img/reset.png"
import "./Hit.module.css"

interface allTimes {
    hours?: number,
    minutes?: number,
    seconds?: number,
    countdown?: boolean
}

const Hit: React.FC<allTimes> = () => {

    const location: object | any = useLocation();

    const time: object | any = location.state;

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
    const [arrow, setArrow] = useState<string>(hitArrow)


    function start() {
        timer.start();
        setHit("spin")
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
        setHit("hide")
        setBreath("hide")
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
            setArrow("")
        } else if (theTime >= 30) {
            setImgSpin(hitSpin)
            setBreath("pauseBreath")
            setHit("spin")
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
        <section className='containerHIT'>
            <Header header={"HiT"} />

            <section className={modalS === true ? "hide" : "null"} >
                <section className='hitArrowSec'>
                    <img className='hitArrow' src={arrow} alt="" />
                </section>
                <section >
                    <img className={hit} src={imgSpin} alt="" />
                    <div className={spinSec}></div>
                    <div className={breath}></div>
                </section>

                {lap.map((one: number, id: number) => (
                    <img className='lapMark' key={id} src={lapMark} alt="" />
                ))}

                <section className='btnSecHit'>


                    <img onClick={() => start()} src={play} alt="" />
                    <img className={(breath === "breath") ? `${"hide"}` : ""} onClick={() => pause()} src={pauseBtn} alt="" />
                    <img onClick={() => stop()} src={stopBtn} alt="" />
                    <img onClick={() => reset()} src={resetBtn} alt="" />
                </section>
            </section>
            {modalP && <ModalPause currentTime={timer.getTimeValues().toString()} modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}

        </section>

    )
};

export default Hit
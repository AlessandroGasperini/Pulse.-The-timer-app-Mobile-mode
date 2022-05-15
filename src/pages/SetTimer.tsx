import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import left from "../assets/img/left.png"
import right from "../assets/img/right.png"
import Header from "../Components/Header";
import setAnalog from "../assets/img/setAnalog.png"
import setDigital from "../assets/img/setDigital.png"
import setHit from "../assets/img/setHit.png"
import hourGlass from "../assets/img/hourGlass.png"
import setStopWatch from "../assets/img/setStopWatch.png"
import setText from "../assets/img/setText.png"



function setTimer() {
    // Start values
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    // Target values
    const [targetDays, setTargetDays] = useState(0)
    const [targetHours, setTargetHours] = useState(0)
    const [targetMinutes, setTargetMinutes] = useState(0)
    const [targetSeconds, setTargetSeconds] = useState(0)

    const [countdown, setCountdown] = useState(true)
    const [updateWhenTargetAchieved, setUpdateWhenTargetAchieved] = useState(false)


    const allSettings: object = {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        targetDays: targetDays,
        targetHours: targetHours,
        targetMinutes: targetMinutes,
        targetSeconds: targetSeconds,
        countdown: countdown,
        updateWhenTargetAchieved: updateWhenTargetAchieved
    }



    return (
        <section>
            <Header header={"Set & Choose"} />

            <section className="setTime">
                <h4>Hours</h4>
                <article>
                    <img onClick={() => setHours(hours - 1)} src={left} alt="" />
                    <p>{hours}</p>
                    <img onClick={() => setHours(hours + 1)} src={right} alt="" />
                </article>
                <h4>Minutes</h4>
                <article>
                    <img onClick={() => setMinutes(minutes - 1)} src={left} alt="" />
                    <p>{minutes}</p>
                    <img onClick={() => setMinutes(minutes + 1)} src={right} alt="" />
                </article>
                <h4>Seconds</h4>
                <article>
                    <img onClick={() => setSeconds(seconds - 1)} src={left} alt="" />
                    <p>{seconds}</p>
                    <img onClick={() => setSeconds(seconds + 1)} src={right} alt="" />
                </article>

            </section>



            <Link state={allSettings} to={"/AnalogTimer"}>
                <img src={setAnalog} alt="" />
            </Link>

            <Link state={allSettings} to={"/Digital"}>
                <img src={setDigital} alt="" />
            </Link>

            <Link state={allSettings} to={"/Hit"}>
                <img src={setHit} alt="" />
            </Link>

            <Link state={allSettings} to={"/HourGlass"}>
                <img src={hourGlass} alt="" />
            </Link>

            <Link state={allSettings} to={"/StopWatch"}>
                <img src={setStopWatch} alt="" />
            </Link>

            <Link state={allSettings} to={"/Text"}>
                <img src={setText} alt="" />
            </Link>







        </section>);
}

export default setTimer;

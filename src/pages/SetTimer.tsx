import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrowUp from "../assets/img/up.png"
import arrowDown from "../assets/img/down.png"
import Header from "../Components/Header";

function setTimer() {
    // Start values
    const [days, setDays] = useState(0)
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
        days: days,
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
            <h1>SetTimer</h1>

            <section>

                <article>
                    <h4>Days</h4>
                    <img onClick={() => setDays(days + 1)} src={arrowUp} alt="" />
                    <p>{days}</p>
                    <img onClick={() => setDays(days - 1)} src={arrowDown} alt="" />
                </article>
                <article>
                    <h4>Hours</h4>
                    <img onClick={() => setHours(hours + 1)} src={arrowUp} alt="" />
                    <p>{hours}</p>
                    <img onClick={() => setHours(hours - 1)} src={arrowDown} alt="" />
                </article>

                <article>
                    <h4>Minutes</h4>
                    <img onClick={() => setMinutes(minutes + 1)} src={arrowUp} alt="" />
                    <p>{minutes}</p>
                    <img onClick={() => setMinutes(minutes - 1)} src={arrowDown} alt="" />
                </article>

                <article>
                    <h4>Seconds</h4>
                    <img onClick={() => setSeconds(seconds + 1)} src={arrowUp} alt="" />
                    <p>{seconds}</p>
                    <img onClick={() => setSeconds(seconds - 1)} src={arrowDown} alt="" />
                </article>

            </section>



            <Link state={allSettings} to={"/Analog"}>
                <h1>Analog klocka</h1>
            </Link>

            <Link state={allSettings} to={"/Digital"}>
                <h1>Digital klocka</h1>
            </Link>

            <Link state={allSettings} to={"/Hit"}>
                <h1>Hit klocka</h1>
            </Link>

            <Link state={allSettings} to={"/Alarm"}>
                <h1>Alarm klocka</h1>
            </Link>

            <Link state={allSettings} to={"/StopWatch"}>
                <h1>StopWatch klocka</h1>
            </Link>

            <Link state={allSettings} to={"/Text"}>
                <h1>Text klocka</h1>
            </Link>





        </section>);
}

export default setTimer;

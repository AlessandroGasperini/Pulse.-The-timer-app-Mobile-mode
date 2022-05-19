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
import calender from "../assets/img/calender.png"
import styles from "./SetTimer.module.css"



function setTimer() {
    // Start values
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)

    // Target values
    const [targetDays, setTargetDays] = useState<number>(0)
    const [targetHours, setTargetHours] = useState<number>(0)
    const [targetMinutes, setTargetMinutes] = useState<number>(0)
    const [targetSeconds, setTargetSeconds] = useState<number>(0)

    const [countdown, setCountdown] = useState<boolean>(true)
    const [updateWhenTargetAchieved, setUpdateWhenTargetAchieved] = useState<boolean>(false)
    const [intervall, setIntervall] = useState<boolean>(false)


    const allSettings: object = {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        targetDays: targetDays,
        targetHours: targetHours,
        targetMinutes: targetMinutes,
        targetSeconds: targetSeconds,
        countdown: countdown,
        updateWhenTargetAchieved: updateWhenTargetAchieved,
        intervall: intervall
    }


    return (
        <section>
            <section className="containerST">
                <Header header={"Set & Choose"} />

                <section className="setTime">
                    <h4>Hours</h4>
                    <article className="btnArt">
                        <img className={hours == 0 ? "blur" : "null"} onClick={hours != 0 ? () => setHours(hours - 1) : () => setHours(0)} src={left} alt="" />
                        <p>{hours}</p>
                        <img onClick={() => setHours(hours + 1)} src={right} alt="" />
                    </article>
                    <h4>Minutes</h4>
                    <article>
                        <img className={minutes == 0 ? "blur" : "null"} onClick={minutes != 0 ? () => setMinutes(minutes - 1) : () => setMinutes(0)} src={left} alt="" />
                        <p>{minutes}</p>
                        <img onClick={() => setMinutes(minutes + 1)} src={right} alt="" />
                    </article>
                    <h4>Seconds</h4>
                    <article>
                        <img className={seconds == 0 ? "blur" : "null"} onClick={seconds != 0 ? () => setSeconds(seconds - 1) : () => setSeconds(0)} src={left} alt="" />
                        <p>{seconds}</p>
                        <img onClick={() => setSeconds(seconds + 1)} src={right} alt="" />
                    </article>

                </section>

                <section className="checkboxSec">
                    <p>Intervall 5min</p>
                    <input className="checkbox" type="checkbox" onChange={() => setIntervall(!intervall)} />
                </section>

                <section className="topRowSelect">

                    <Link className={hours == 0 && seconds == 0 && minutes == 0 ? "blur" : "null"} state={allSettings} to={hours == 0 && seconds == 0 && minutes == 0 ? "/SetTimer" : "/AnalogTimer"}>
                        <img src={setAnalog} alt="" />
                    </Link>

                    <Link className={hours == 0 && seconds == 0 && minutes == 0 ? "blur" : "null"} state={allSettings} to={hours == 0 && seconds == 0 && minutes == 0 ? "/SetTimer" : "/Digital"}>
                        <img src={setDigital} alt="" />
                    </Link>

                    <Link className={minutes <= 0 || intervall == true || hours > 0 || seconds > 0 ? "blur" : "null"} state={allSettings} to={minutes <= 0 || intervall == true ? "/SetTimer" : "/Hit"}>
                        <img src={setHit} alt="" />
                    </Link>

                    <Link className={intervall == true || hours == 0 && minutes == 0 && seconds == 0 ? "blur" : "null"} state={allSettings} to={intervall == true || hours == 0 && minutes == 0 && seconds == 0 ? "/SetTimer" : "/HourGlass"}>
                        <img src={hourGlass} alt="" />
                    </Link>
                </section>
                <section className="bottomRowSelect">
                    <Link className={hours > 0 || seconds > 0 || minutes > 0 || intervall == true ? "blur" : "null"} state={allSettings} to={hours > 0 || seconds > 0 || minutes > 0 ? "/SetTimer" : "/StopWatch"}>
                        <img src={setStopWatch} alt="" />
                    </Link>

                    <Link className={hours > 0 || seconds > 0 || minutes > 0 || intervall == true ? "blur" : "null"} state={allSettings} to={hours > 0 || seconds > 0 || minutes > 0 ? "/SetTimer" : "/BigDay"}>
                        <img src={calender} alt="" />
                    </Link>

                    <Link className={intervall == true || hours == 0 && minutes == 0 && seconds == 0 ? "blur" : "null"} state={allSettings} to={intervall == true || hours == 0 && minutes == 0 && seconds == 0 ? "/SetTimer" : "/Text"}>
                        <img src={setText} alt="" />
                    </Link>

                </section>

            </section>

        </section>);
}

export default setTimer;

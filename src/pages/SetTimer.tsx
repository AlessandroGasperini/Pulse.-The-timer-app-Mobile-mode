import React from "react";
import { Link } from "react-router-dom";
import EasyTimer from "../Components/EasyTimer";
import { useState } from "react";

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

    return (<section>
        <h1>SetTimer</h1>


        <input type="number" onChange={(e) => setSeconds(parseInt(e.target.value))} />



        <Link state={allSettings} to={"/Analog"}>
            <h1>Analog klocka</h1>
        </Link>



    </section>);
}

export default setTimer;

import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link } from "react-router-dom";


interface allTimes {
    days: number,
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

const EasyTimer: React.FC<allTimes> = ({ days, hours, minutes, seconds, targetDays, targetHours, targetMinutes, targetSeconds, countdown, updateWhenTargetAchieved }) => {


    /* The hook returns an EasyTimer instance and a flag to see if the target has been achieved */
    const [timer, isTargetAchieved] = useTimer({
        /* Hook configuration */
        startValues: {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        },
        target: {
            days: targetDays,
            hours: targetHours,
            minutes: targetMinutes,
            seconds: targetSeconds
        },
        countdown: countdown,
        updateWhenTargetAchieved: updateWhenTargetAchieved

    });




    function start() {
        timer.start();
    }

    function pause() {
        timer.pause();
    }

    function stop() {
        timer.stop();
    }


    function reset() {
        timer.reset();
    }

    if (timer.getTimeValues().toString() === "00:00:00") {
        console.log("hej");

    }

    return (
        <section>
            <div>{timer.getTimeValues().toString()}</div>

            <button onClick={() => start()}>start</button>

            <button onClick={() => pause()}>pause</button>

            <button onClick={() => stop()}>stop</button>

            <button onClick={() => reset()}>reset</button>

        </section>

    )
};

export default EasyTimer
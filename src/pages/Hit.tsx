
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import hitSpin from "../assets/img/hitSpin.png"
import hitRest from "../assets/img/hitRest.png"

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

const Hit: React.FC<allTimes> = () => {

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


    function start() {
        timer.start();
    };

    function pause() {
        timer.pause();
    };

    function stop() {
        timer.stop();
    };


    function reset() {
        window.location.reload()
    };

    const theTime = timer.getTimeValues().toString()

    console.log(theTime);

    return (
        <section>

            <h1>hit</h1>

            <img className="spin" src={hitSpin} alt="" />

            <section>
                <button onClick={() => start()}>start</button>

                <button onClick={() => pause()}>pause</button>

                <button onClick={() => stop()}>stop</button>

                <button onClick={() => reset()}>reset</button>

            </section>

        </section>

    )
};

export default Hit
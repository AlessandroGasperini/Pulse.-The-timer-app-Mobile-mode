import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


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

const Digital: React.FC<allTimes> = () => {

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
        timer.reset();
    };



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

export default Digital
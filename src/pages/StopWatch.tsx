import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


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

const StopWatch: React.FC<allTimes> = () => {

    const location: any = useLocation();

    const time = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        target: {
            days: 10,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        countdown: false,
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


    const [allLaps, setAllLaps]: Array<string> | any = useState([])

    function lap() {
        let newLap: any = timer.getTimeValues().toString()
        allLaps.push(newLap)
    };

    return (
        <section>
            <div>{timer.getTimeValues().toString()}</div>


            <button onClick={() => start()}>start</button>

            <button onClick={() => pause()}>pause</button>

            <button onClick={() => stop()}>stop</button>

            <button onClick={() => reset()}>reset</button>

            <button onClick={() => lap()}>lap</button>
            <ul>
                {allLaps.map((lap: string, id: number) => (
                    <p key={id}>{lap}</p>
                ))}
            </ul>
        </section>

    )
};

export default StopWatch
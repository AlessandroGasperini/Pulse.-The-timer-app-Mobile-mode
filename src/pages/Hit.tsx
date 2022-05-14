
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import hitSpin from "../assets/img/hitSpin.png"

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

    const [hit, setHit] = useState<string>("stillMin")
    const [breath, setBreath] = useState<string>("pauseBreath")
    const [imgSpin, setImgSpin] = useState<string>(hitSpin)
    const [goRest, setGoRest] = useState<string>("")

    function start() {
        timer.start();
        setHit("spin")
    };

    function pause() {
        timer.pause();
        setHit("pause")
    };


    function reset() {
        window.location.reload()
    };

    const theTime = timer.getTimeValues().seconds
    console.log(theTime);

    useEffect(() => {
        if (theTime <= 30 && theTime != 0) {
            setHit("rest")
            setBreath("breath")
            setGoRest("Rest")
        } else if (theTime > 30) {
            setImgSpin(hitSpin)
            setBreath("pauseBreath")
            setHit("spin")
            setGoRest("Go!")
        }
    }, [theTime])
    return (
        <section>
            <div>{timer.getTimeValues().toString()}</div>
            <h1>hit</h1>

            <img className={hit} src={imgSpin} alt="" />
            <div className={breath}></div>
            <h3>{goRest}</h3>

            <section>
                <button onClick={() => start()}>start</button>

                <button onClick={() => pause()}>pause</button>

                <button onClick={() => reset()}>reset</button>

            </section>

        </section>

    )
};

export default Hit
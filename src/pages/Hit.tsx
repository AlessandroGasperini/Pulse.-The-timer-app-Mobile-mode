
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import hitSpin from "../assets/img/hitSpin.png"
import hitArrow from "../assets/img/hitArrow.png"
import lapMark from "../assets/img/lapMark.png"



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
    const [arrow, setArrow] = useState<string>(hitArrow)


    function start() {
        timer.start();
        setHit("spin")
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
        // console.log(lap);

    }, [theTime])


    useEffect(() => {
        if (theTime <= 30 && theTime != 0) {
            setHit("rest")
            setBreath("breath")
            setGoRest("Rest")
            setArrow("")
        } else if (theTime >= 30) {
            setImgSpin(hitSpin)
            setBreath("pauseBreath")
            setHit("spin")
            setGoRest("Go!")
            setArrow(hitArrow)
        }
    }, [theTime])

    let spinSec: string = "spinSection"

    if (timer.getTimeValues().minutes === 0 && timer.getTimeValues().seconds <= 30) {
        spinSec = "hideSec"

    }



    // console.log(timer.getTimeValues().toString());


    return (
        <section>

            <section>
                <img src={arrow} alt="" />
            </section>
            <section className={spinSec}>
                <img className={hit} src={imgSpin} alt="" />
                <div className={breath}></div>
                <h3>{goRest}</h3>
            </section>

            {lap.map((one: number, id: number) => (
                <img key={id} src={lapMark} alt="" />
            ))}

            <section>
                <button onClick={() => start()}>start</button>

                <button onClick={() => reset()}>reset</button>

            </section>

        </section>

    )
};

export default Hit
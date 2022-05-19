import React from "react";
import { Link } from "react-router-dom";
import sekund from "../assets/img/sekund.png"
import clock from "../assets/img/clock.png"
import setDigital from "../assets/img/setDigital.png"
import timpekare from "../assets/img/timpekare.png"
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import play from "../assets/img/play.png"
import pauseBtn from "../assets/img/pause.png"
import resetBtn from "../assets/img/reset.png"
import lapBtn from "../assets/img/lapBtn.png"
import "./AnalogStopWatch.module.css"



const AnalogStopWatch: React.FC = () => {

    const [timer, isTargetAchieved] = useTimer();
    const [sec, setSec] = useState<string>("noRunSeconds")
    const [hours, setHours] = useState<string>("noRunMinutes")


    function start() {
        timer.start();
        setSec("sekundpekare")
        setHours("timpekare")
    };

    function pause() {
        timer.pause();
        setSec("pauseSecond")
        setHours("pauseHour")
    };


    function reset() {
        timer.reset();
        window.location.reload()
    };


    useEffect(() => {
        if (timer.getTimeValues().toString() === "00:00:00") {
            setSec("pauseSecond")
            setHours("pauseHour")

        }
    }, [timer.getTimeValues().toString()])


    const [allLaps, setAllLaps]: Array<string> | any = useState([])

    function lap() {
        let newLap: any = timer.getTimeValues().toString()
        allLaps.push(newLap)
    };


    return (
        <section className="containerASW">
            <Header header={"Stop watch Analog"} />
            <section className="clockSection">
                <img className="clock" src={clock} alt="" />
                <img className={sec} src={sekund} alt="" />
                <img className={hours} src={timpekare} alt="" />
                <div className="timer">{timer.getTimeValues().toString()}</div>

            </section>

            <ul>
                {allLaps.map((lap: string, id: number) => (
                    <p className="laps" key={id}>{lap}</p>
                ))}
            </ul>

            <section className="stopWatchASec">
                <Link to={"/StopWatch"}>
                    <img src={setDigital} alt="" />
                </Link>
                <img onClick={() => start()} src={play} alt="" />
                <img onClick={() => pause()} src={pauseBtn} alt="" />
                <img onClick={() => reset()} src={resetBtn} alt="" />
                <img onClick={() => lap()} src={lapBtn} alt="" />



            </section>
        </section>

    )
};

export default AnalogStopWatch
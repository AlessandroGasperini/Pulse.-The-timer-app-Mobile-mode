import React from "react";
import analogChange from "../assets/img/setAnalog.png"
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header";
import play from "../assets/img/play.png"
import pauseBtn from "../assets/img/pause.png"
import stopBtn from "../assets/img/stop.png"
import resetBtn from "../assets/img/reset.png"
import lapBtn from "../assets/img/lapBtn.png"

const StopWatch: React.FC = () => {

    const location: any = useLocation();

    const time = location.state;

    const [timer, isTargetAchieved] = useTimer({});


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


    const [allLaps, setAllLaps]: Array<string> | any = useState([])

    function lap() {
        let newLap: any = timer.getTimeValues().toString()
        allLaps.push(newLap)
    };

    return (
        <section className="containerSW">

            <Header header={"Stop Watch Digital"} />
            <div className="stopWatch">{timer.getTimeValues().toString()}</div>



            <ul>
                {allLaps.map((lap: string, id: number) => (
                    <p className="laps" key={id}>{lap}</p>
                ))}
            </ul>


            <section className="stopWatchSec">
                <Link to={"/AnalogStopWatch"}>
                    <img src={analogChange} alt="" />
                </Link>
                <img onClick={() => start()} src={play} alt="" />
                <img onClick={() => pause()} src={pauseBtn} alt="" />
                <img onClick={() => reset()} src={resetBtn} alt="" />
                <img onClick={() => lap()} src={lapBtn} alt="" />

            </section>
        </section>

    )
};

export default StopWatch
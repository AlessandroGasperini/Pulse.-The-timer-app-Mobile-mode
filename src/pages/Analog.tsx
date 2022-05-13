import React from "react";
import { useLocation } from "react-router-dom";
import EasyTimer from "../Components/EasyTimer";

function Analog() {

    const location = useLocation()
    const time: any = location.state



    return (
        <section>
            <h1>Analo</h1>


            <EasyTimer days={time.days} hours={time.hours} minutes={time.minutes} seconds={time.seconds} targetDays={time.targetDays} targetHours={time.targetHours} targetMinutes={time.targetMinutes} targetSeconds={time.targetSeconds} countdown={time.countdown} updateWhenTargetAchieved={time.updateWhenTargetAchieved} />


        </section>
    );
}

export default Analog;
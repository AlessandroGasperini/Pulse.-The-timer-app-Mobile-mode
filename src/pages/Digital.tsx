import React from "react";
import EasyTimer from "../Components/EasyTimer";
import { useLocation } from "react-router-dom";

function Digital() {
    const location = useLocation()
    const time: any = location.state

    return (
        <section>
            <h1>Digital</h1>
            <EasyTimer days={time.days} hours={time.hours} minutes={time.minutes} seconds={time.seconds} targetDays={time.targetDays} targetHours={time.targetHours} targetMinutes={time.targetMinutes} targetSeconds={time.targetSeconds} countdown={time.countdown} updateWhenTargetAchieved={time.updateWhenTargetAchieved} />

        </section>
    );
}

export default Digital;
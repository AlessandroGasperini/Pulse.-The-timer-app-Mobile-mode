import React from "react";
import EasyTimer from "../Components/EasyTimer";
import { useLocation } from "react-router-dom";

function Hit() {
    const location = useLocation()
    const time: any = location.state

    return (
        <section>
            <h1>Digital</h1>
            <EasyTimer days={0} hours={0} minutes={0} seconds={0} targetDays={time.days} targetHours={time.hours} targetMinutes={time.minutes} targetSeconds={time.seconds} countdown={time.false} updateWhenTargetAchieved={time.updateWhenTargetAchieved} />

        </section>
    );
}

export default Hit;
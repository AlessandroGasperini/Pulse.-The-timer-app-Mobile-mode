import React from "react";
import { useLocation } from "react-router-dom";
import EasyTimer from "../Components/EasyTimer";

function StopWatch() {



    let timeZero = 0


    return (
        <section>
            <h1>StopWatch</h1>


            <EasyTimer days={timeZero} hours={timeZero} minutes={timeZero} seconds={timeZero} targetDays={1} targetHours={timeZero} targetMinutes={timeZero} targetSeconds={timeZero} countdown={false} updateWhenTargetAchieved={false} />


        </section>
    );
}

export default StopWatch;
import React, { useState } from "react";
import logoHeader from "../assets/img/headerLogo.png"

function Header() {

    const today = new Date()

    const date: number | any = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const hours: number = today.getHours()
    const minutes: any = today.getUTCMinutes()
    const [zero, setZero] = useState<number>()

    // useState(() => {
    //     if (minutes === 0 || minutes === 1 || minutes === 1 || minutes === 2 || minutes === 3 || minutes === 4 || minutes === 5 || minutes === 6 || minutes === 7 || minutes === 8 || minutes === 9) {
    //         setZero(0)
    //     }
    // })



    return (
        <section>
            <img src={logoHeader} alt="" />
            <h1>.pulSe</h1>
            <h3>{date}</h3>
            <h3>{hours}:{zero}{minutes}</h3>
        </section>
    );
}

export default Header;
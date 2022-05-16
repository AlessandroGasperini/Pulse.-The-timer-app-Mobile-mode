import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../assets/img/headerLogo.png"
import styles from "./Header.module.css"

function Header(props: string | any) {

    const today = new Date()

    const date: number | any = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const hours: number = today.getHours()
    const minutes: any = today.getUTCMinutes()

    let zero: string = ""

    if (minutes === 0 || minutes === 1 || minutes === 2 || minutes === 3 || minutes === 4 || minutes === 5 || minutes === 6 || minutes === 7 || minutes === 8 || minutes === 9) {
        zero = "0"
    }


    return (
        <section className="header">
            <Link to={"/setTimer"}><img src={logoHeader} alt="" /></Link>

            <h1>{props.header}</h1>
            <article>
                <h3>{date}</h3>
                <h3>{hours}:{zero}{minutes}</h3>
            </article>
        </section>
    );
}

export default Header;
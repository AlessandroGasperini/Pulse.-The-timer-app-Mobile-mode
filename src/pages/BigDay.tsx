import React, { useEffect } from "react";
import { useState } from "react";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";
import up from "../assets/img/up.png"
import down from "../assets/img/down.png"
import { Link, useLocation } from "react-router-dom";
import useTimer from "easytimer-react-hook";


const BigDay: React.FC = () => {
    useEffect(() => {
        timer.start()
    }, [])
    const [timer, isTargetAchieved] = useTimer({ startValues: { hours: 1000000, minutes: 1000000, seconds: 1000000 }, countdown: true });

    const [modalS, setModalS] = useState<boolean>(false)
    const today = new Date()



    const year: number = today.getFullYear()
    const month: number = (today.getMonth() + 1)
    const day: number = today.getDate()
    const hours: number = today.getHours()
    const minutes: number = today.getUTCMinutes()

    const [chooseYear, setYear] = useState<number>(year)
    const [chooseMonth, setMonth] = useState<number>(month)
    const [chooseDay, setDay] = useState<number>(day)
    const [chooseHour, setHour] = useState<number>(hours)
    const [chooseMinute, setMinute] = useState<number>(minutes)
    const [chooseImg, setImg] = useState<string>("")
    const [chooseNote, setNote] = useState<string>("")

    let monthText = ""
    switch (chooseMonth) {
        case 1:
            monthText = "Januari"
            break;
        case 2:
            monthText = "Februari"
            break;
        case 3:
            monthText = "Mars"
            break;
        case 4:
            monthText = "April"
            break;
        case 5:
            monthText = "Maj"
            break;
        case 6:
            monthText = "Juni"
            break;
        case 7:
            monthText = "Juli"
            break;
        case 8:
            monthText = "Augusti"
            break;
        case 9:
            monthText = "September"
            break;
        case 10:
            monthText = "Oktober"
            break;
        case 11:
            monthText = "November"
            break;
        case 12:
            monthText = "December"
            break;
        default:
            break;
    }





    let todaysDate: string = year.toString() + month.toString() + day.toString() + hours.toString() + minutes.toString()
    let choosenDate: string = chooseYear.toString() + chooseMonth.toString() + chooseDay.toString() + chooseHour.toString() + chooseMinute.toString()

    let zero: string = ""
    if (chooseMinute === 0 || chooseMinute === 1 || chooseMinute === 2 || chooseMinute === 3 || chooseMinute === 4 || chooseMinute === 5 || chooseMinute === 6 || chooseMinute === 7 || chooseMinute === 8 || chooseMinute === 9) {
        zero = "0"
    }


    const [finalDate, setFinalDate] = useState<string>("")
    function makeBigDay() {
        setFinalDate(choosenDate)
    }
    console.log(todaysDate);
    console.log(finalDate);
    timer.getTimeValues().seconds

    useEffect(() => {
        if (todaysDate === finalDate) {
            console.log("happy day bitch");
            setModalS(true)
        }
    }, [timer.getTimeValues().seconds])







    return (
        <section>
            <Header header={"Big Day"} />

            <input type="text" onChange={(e) => setNote(e.target.value)} />

            <article>
                <img onClick={() => setYear(chooseYear + 1)} src={up} alt="" />
                <p>{chooseYear}</p>
                <img onClick={() => setYear(chooseYear - 1)} src={down} alt="" />
            </article>

            <article>
                <img onClick={() => setMonth(chooseMonth + 1)} src={up} alt="" />
                <p>{monthText}</p>
                <img onClick={() => setMonth(chooseMonth - 1)} src={down} alt="" />
            </article>

            <article>
                <img className={monthText === "Februari" && chooseDay === 28 ? "hide" : ""} onClick={() => setDay(chooseDay + 1)} src={up} alt="" />
                <p>{chooseDay}</p>
                <img className={chooseDay === 1 ? "hide" : ""} onClick={() => setDay(chooseDay - 1)} src={down} alt="" />
            </article>

            <article>
                <img onClick={() => setHour(chooseHour + 1)} src={up} alt="" />
                <p>{chooseHour}</p>
                <img onClick={() => setHour(chooseHour - 1)} src={down} alt="" />
            </article>

            <article>
                <img onClick={() => setMinute(chooseMinute + 1)} src={up} alt="" />
                <p>{zero}{chooseMinute}</p>
                <img onClick={() => setMinute(chooseMinute - 1)} src={down} alt="" />
            </article>

            <input type="text" onChange={(e) => setImg(e.target.value)} />



            <section className={finalDate != "" ? "" : "hide"} >
                <h1>{chooseNote}</h1>
                <img src={chooseImg} alt="" />
                <h2>{chooseYear}{chooseMonth}{chooseDay}</h2>
                <h5>{chooseHour}:{zero}{chooseMinute}</h5>
            </section>


            <button onClick={() => makeBigDay()}>Create </button>

            {modalS && <ModalStop />}

        </section>

    )
};

export default BigDay
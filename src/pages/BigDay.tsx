import React, { useEffect } from "react";
import { useState } from "react";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";
import up from "../assets/img/up.png"
import down from "../assets/img/down.png"
import useTimer from "easytimer-react-hook";
import createBtn from "../assets/img/create.png"
import "./BigDay.module.css"



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
    const [monthInText, setMonthText] = useState<string>("")
    const [chooseDay, setDay] = useState<number>(day)
    const [chooseHour, setHour] = useState<number>(hours)
    const [chooseMinute, setMinute] = useState<number>(minutes)
    const [chooseImg, setImg] = useState<string>("")
    const [chooseNote, setNote] = useState<string>("")

    let monthText: string = ""
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
    let zeroHour: string = ""
    if (chooseMinute === 0 || chooseMinute === 1 || chooseMinute === 2 || chooseMinute === 3 || chooseMinute === 4 || chooseMinute === 5 || chooseMinute === 6 || chooseMinute === 7 || chooseMinute === 8 || chooseMinute === 9) {
        zero = "0"
    }

    if (chooseHour === 0 || chooseHour === 1 || chooseHour === 2 || chooseHour === 3 || chooseHour === 4 || chooseHour === 5 || chooseHour === 6 || chooseHour === 7 || chooseHour === 8 || chooseHour === 9) {
        zeroHour = "0"
    }

    const [finalDate, setFinalDate] = useState<string>("")
    function makeBigDay() {
        setFinalDate(choosenDate)
        setMonthText(monthText)
    }

    useEffect(() => {
        if (todaysDate === finalDate) {
            console.log("happy day bitch");
            setModalS(true)
        }
    }, [timer.getTimeValues().seconds])

    return (
        <section className="containerBD">
            <Header header={"Big Day"} />
            <article className="inputName">
                <input className="imputImg" type="text" onChange={(e) => setNote(e.target.value)} />
            </article>
            <section className="setDay">

                <article className="btnArtBD">
                    <img onClick={() => setYear(chooseYear + 1)} src={up} alt="" />
                    <p>{chooseYear}</p>
                    <img className={chooseYear == 2022 ? "hide" : "null"} onClick={() => setYear(chooseYear - 1)} src={down} alt="" />
                </article>

                <article className="btnArtBD">
                    <img className={monthText === "Januari" && chooseDay === 31 || monthText === "Februari" && chooseDay === 28 || monthText === "Mars" && chooseDay === 31 || monthText === "April" && chooseDay === 30 || monthText === "Maj" && chooseDay === 31 || monthText === "Juni" && chooseDay === 30 || monthText === "Juli" && chooseDay === 31 || monthText === "Augusti" && chooseDay === 31 || monthText === "September" && chooseDay === 30 || monthText === "Oktober" && chooseDay === 31 || monthText === "November" && chooseDay === 30 || monthText === "December" && chooseDay === 31 ? "hide" : ""} onClick={() => setDay(chooseDay + 1)} src={up} alt="" />
                    <p>{chooseDay}</p>
                    <img className={chooseDay === 1 ? "hide" : ""} onClick={() => setDay(chooseDay - 1)} src={down} alt="" />
                </article>

                <article className="btnArtBD">
                    <img className={monthText == "December" ? "hide" : "null"} onClick={() => setMonth(chooseMonth + 1)} src={up} alt="" />
                    <p>{monthText}</p>
                    <img className={monthText == "Januari" ? "hide" : "null"} onClick={() => setMonth(chooseMonth - 1)} src={down} alt="" />
                </article>

                <section className="timeBD">

                    <article className="btnArtBD">
                        <img className={chooseHour == 23 ? "hide" : "null"} onClick={() => setHour(chooseHour + 1)} src={up} alt="" />
                        <p>{zeroHour}{chooseHour} :</p>
                        <img className={chooseHour == 0 ? "hide" : "null"} onClick={() => setHour(chooseHour - 1)} src={down} alt="" />
                    </article>

                    <article className="btnArtBD">
                        <img className={chooseMinute == 59 ? "hide" : "null"} onClick={() => setMinute(chooseMinute + 1)} src={up} alt="" />
                        <p>{zero}{chooseMinute}</p>
                        <img className={chooseMinute == 0 ? "hide" : "null"} onClick={() => setMinute(chooseMinute - 1)} src={down} alt="" />
                    </article>
                </section>
            </section>

            <article className="inputImg">
                <input className="imputImg" type="text" onChange={(e) => setImg(e.target.value)} />
            </article>

            <article className="btnArti">
                <img onClick={() => makeBigDay()} src={createBtn} alt="" />
            </article>

            <article className="choosenDayBD">
                <section className={finalDate != "" ? "" : "hide"} >
                    <article className="imgAndNote">
                        <h1>{chooseNote}</h1>
                        <img src={chooseImg} alt="" />
                    </article>
                    <h2>{chooseDay} {monthInText}-{chooseYear}</h2>
                    <h5>{chooseHour}:{zero}{chooseMinute}</h5>
                </section>
            </article>


            {modalS && <ModalStop />}

        </section>

    )
};

export default BigDay
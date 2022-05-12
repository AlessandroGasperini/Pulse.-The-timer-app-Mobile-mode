import React from "react";

function SetTimer() {

    require(['lib/easytimer/dist/easytimer.min.js'], function (easytimer) {
        var timer = new easytimer.Timer();
        console.log(timer);
    });




    return (
        <section>
            <h1>SetTimer</h1>

        </section>
    );
}

export default SetTimer;
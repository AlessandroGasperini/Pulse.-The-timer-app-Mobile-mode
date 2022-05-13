import React from "react";
import { useLocation } from "react-router-dom";

function Hit() {
    const location = useLocation()
    const time: any = location.state

    return (
        <section>
            <h1>hit</h1>

        </section>
    );
}

export default Hit;
import React from "react"
import { Link } from "react-router-dom"

function Income() {

    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <>
        <h1>Income page goes here</h1>
        <Link to="something">Click me</Link>
    </>
    )
}

export default Income
import React from "react"
import data from "./data.js"
import Header from "./components/Header"
import Card from "./components/Card"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div>
            <Header/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
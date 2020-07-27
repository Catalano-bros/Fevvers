import React from "react"
import "./main.css"
import BAR from "../components/BAR"
import FOOTER from "../components/footer"

export default function Home() {
  console.log(BAR)

  return (
    <>
      <BAR />
      <h1>Fevvers</h1>
      <p>Music fanzine</p>
      <FOOTER/>
    </>
  )
}

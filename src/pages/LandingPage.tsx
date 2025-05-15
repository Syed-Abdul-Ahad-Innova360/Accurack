import React from 'react'
import Header from "./../components/LandingPageComponents/Header"
import Hero from "./../components/LandingPageComponents/Hero"
import Tagline from "../components/LandingPageComponents/Tagline"
import Cashflow from "../components/LandingPageComponents/Cashflow"

function LandingPage() {
  return (
    <>
        <Header/>
        <Hero/>
        <Tagline/>
        <Cashflow/>
    </>
  )
}

export default LandingPage
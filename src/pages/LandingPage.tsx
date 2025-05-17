
import Header from "./../components/LandingPageComponents/Header"
import Hero from "./../components/LandingPageComponents/Hero"
import Tagline from "../components/LandingPageComponents/Tagline"
import Cashflow from "../components/LandingPageComponents/Cashflow"
import InventoryForcasting from '../components/LandingPageComponents/InventoryForcasting'
import SeamlessIntegration from '../components/LandingPageComponents/SeamlessIntegration'
import Automated from '../components/LandingPageComponents/Automated'
import FinancialReporting from '../components/LandingPageComponents/FinancialReporting'

function LandingPage() {
  return (
    <>
        <Header/>
        <Hero/>
        <Tagline/>
        <Cashflow/>
        <InventoryForcasting/>
        <SeamlessIntegration/>
        <Automated/>
        <FinancialReporting/>
    </>
  )
}

export default LandingPage
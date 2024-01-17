import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/PricingCards";




function Pricing(){
    return(
        <div>
            <Navbar/>
            <HeroImage heading="Pricing" text="Choose the best plan for you"/>
            <div className= "priceCards">
           
            <PricingCards sub="Basic" price="0,04 BTC" trainingType="Cardio"/>
            <PricingCards sub="Suite" price="0,08 BTC" trainingType="Cardio + Bodybuilding"/>
            <PricingCards sub="Executive" price="0,10 BTC" trainingType="Cardio + Bodybuilding + Personal trainer + Spa"/>
            </div>
            <Footer/>
        </div>
    )
}
export default Pricing;
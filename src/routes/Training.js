import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import TrainingSection from "../components/TrainingSection";


function Training() {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="Training" text="We are here to help you"/>
      <TrainingSection/>
      <Footer/>
    </div>
  );
}
export default Training;
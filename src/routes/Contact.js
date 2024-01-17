import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
function  Contact() {
  return (
    <div>
     <Navbar/>
      <HeroImage heading="Contact" text="We are here to help you"/>
      <Form/>
      <Footer/>
    </div>
  );
}
export default Contact;
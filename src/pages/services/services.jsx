import "./services.css";
import { services } from "../../utilty/services.js";
import { Header } from '../Header/header.jsx'
const Services = () => {
  return (
    <div className="services-container">
      <Header/>
      <div className="hero-section">
        <h1>Our Tattoo Services</h1>
        <h3>
          From custom designs to full sleeve masterpieces, we provide
          professional tattoo services tailored to your style, story, and
          vision.
        </h3>
      </div >
     <div className="price-section">
  {services.map((service) => (
    <div className="price-card" key={service.id}>
      <h1>{service.name}</h1>
      <h3>{service.price}</h3>
    </div>
  ))}
</div>
   <div className="booking-section">
  <h1>Why Book With Us</h1>

  <div className="booking-grid">
    <h3>Experienced Artists</h3>
    <h3>Custom Designs</h3>
    <h3>Safe & Hygienic Environment</h3>
    <h3>Premium Quality Work</h3>
    <h3>Client-Focused Experience</h3>
    <h3>Home Service Available</h3>
  </div>
</div>
    </div>
  );
};

export { Services };

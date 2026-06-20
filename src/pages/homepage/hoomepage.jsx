import "./home.css";
import { Header } from "../Header/header";
import { bookAppointment } from "../../utilty/bookAppoint.js";
const HomePage = () => {
  return (
    <div className="home-container">
      <div className="art-container">
        <Header />
        <div className="art-info">
          <div>
            <h1>Chris_Tattoo: Studio</h1>
            <h4>Unique Tattoos</h4>
          </div>
          <button onClick={bookAppointment}>Book now</button>
        </div>
      </div>
    </div>
  );
};

export { HomePage };

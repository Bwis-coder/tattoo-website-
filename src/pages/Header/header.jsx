import "./header.css";
import { NavLink } from "react-router-dom";
import { bookAppointment } from "../../utilty/bookAppoint";
const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/services"
      >
        <p>Services</p>
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/gallery"
      >
        <p>Gallery</p>
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/reviews"
      >
        <p>Reviews</p>
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/artist"
      >
        <p>Artist</p>
      </NavLink>

      <button onClick={bookAppointment}>Book Appointment</button>
    </div>
  );
};

export { Header };

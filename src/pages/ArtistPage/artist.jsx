import { artists } from "../../utilty/aritist.js";
import "./artist.css";
import { Header } from "../Header/header.jsx";
const ArtistPage = () => {
  return (
    <div className="artist-container">
      <Header />
      <h1>Meet Our Artists</h1>
      <h3>
        Our talented team of tattoo artists brings creativity, experience, and
        passion to every design.
      </h3>
      {artists.map((artist) => (
        <div className="artist-card" key={artist.id}>
          <img src={artist.image} alt={artist.name} loading="lazy" />
          <h2>{artist.name}</h2>
          <h3>{artist.years}</h3>
          <p>{artist.specialty}</p>
        </div>
      ))}
    </div>
  );
};

export { ArtistPage };

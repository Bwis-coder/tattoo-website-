import { galleryImages } from "../../utilty/gallery.js";
import "./gallery.css";
import { Header } from "../Header/header.jsx";
const Gallery = () => {
  return (
    <div className="gallery-container">
      <Header />
      <div className="gallery-info">
        <h1> Our Tattoo Gallery</h1>
        <h3>
          Explore our latest tattoo work, showcasing creativity, detail, and
          unique designs.
        </h3>
        <div className="image-container">
          {galleryImages.map((img) => {
            return (
              <div className="image-card" key={img.id}>
                <img
                  className="image"
                  src={img.image}
                  alt={`Tattoo ${img.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Gallery };

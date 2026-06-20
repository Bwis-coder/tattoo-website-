import { HomePage } from "./pages/homepage/hoomepage.jsx";
import { Services } from "./pages/services/services";
import { ArtistPage } from "./pages/ArtistPage/artist.jsx";
import { Gallery } from "./pages/gallery/gallery.jsx";
import { ReviewPage } from "./pages/reviews/review.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<ReviewPage/>} />
      </Routes>
    </>
  );
}

export default App;

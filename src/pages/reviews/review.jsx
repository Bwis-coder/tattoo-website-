import "./reviews.css";
import { Header } from '../Header/header'

const reviews = [
  {
    id: 1,
    name: "Michael R.",
    review:
      "Absolutely amazing work. The detail and professionalism exceeded my expectations.",
  },
  {
    id: 2,
    name: "Sarah T.",
    review:
      "Best tattoo experience I've ever had. Clean environment and incredible artistry.",
  },
  {
    id: 3,
    name: "James K.",
    review:
      "The custom design was exactly what I imagined. Highly recommended.",
  },
  {
    id: 4,
    name: "Emma W.",
    review:
      "Very talented artist and a great experience from consultation to completion.",
  },
  {
    id: 5,
    name: "David L.",
    review:
      "Outstanding quality and attention to detail. I will definitely be back.",
  },
  {
    id: 6,
    name: "Sophia M.",
    review:
      "Professional, friendly, and incredibly skilled. My tattoo turned out perfect.",
  },
];

const ReviewPage = () => {
  return (
    <div className="reviews-container">
      <Header/>
      <div className="reviews-header">
        <h1>What Our Clients Say</h1>
        <h3>
          Hear from clients who trusted us to turn their ideas into lasting
          works of art.
        </h3>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <p>{review.review}</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};


export { ReviewPage };
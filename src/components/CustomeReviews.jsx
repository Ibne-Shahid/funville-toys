import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    review:
      "Amazing quality toys! My son loved the puzzle set from FunVille Toys. Fast delivery and beautiful packaging.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    review:
      "Very colorful and safe toys. The car set I ordered was exactly as shown on the website. Highly recommended!",
    rating: 4,
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Mariya Siddiqua",
    review:
      "My daughter loves the Barbie doll. Great build quality and fast shipping. FunVille Toys never disappoints!",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=20",
  },
];

const CustomerReviews = () => {
  return (
    <div className="py-16 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-center text-3xl md:text-5xl mt-10 font-bold">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mt-5 mb-12">
          Real experiences from happy parents who trust <span className="font-semibold text-secondary">FunVille <span className="text-accent">Toys</span></span>!
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="card bg-base-200 shadow-xl p-6 border hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={rev.img}
                  alt={rev.name}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <h3 className="text-xl font-semibold">{rev.name}</h3>
              </div>

              <p className="text-gray-600 mb-4 text-left">{rev.review}</p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

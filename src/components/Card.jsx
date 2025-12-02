import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ toy }) => {
  return (
    <div className="p-2">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-3 flex justify-center">
          <img
            src={toy?.pictureURL}
            alt={toy?.toyName}
            className="h-32 object-contain"
          />
        </div>

        <div className="px-3 py-4 text-center">

          <h3 className="text-sm font-bold text-gray-800 h-10 flex items-center justify-center">
            {toy?.toyName}
          </h3>

          <div className="flex justify-center items-center gap-3 mt-2 text-sm">
            <span className="flex items-center gap-1 text-yellow-600 font-semibold">
              <FaStar className="text-yellow-500" /> {toy?.rating}
            </span>
            <span className="font-bold text-green-700">
              ${toy?.price}
            </span>
          </div>

          <Link to={`/toyDetails/${toy.toyId}`}>
            <button className="btn btn-primary w-full mt-4 rounded-full btn-sm">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Card;

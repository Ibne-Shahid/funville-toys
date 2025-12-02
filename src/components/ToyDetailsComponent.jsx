import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import TryNow from "../components/TryNow";
import Swal from "sweetalert2";

const ToyDetailsComponent = ({ toy, handeSubmit }) => {
    
    const handleAdd = () => {
        Swal.fire({
            title: "Added!",
            text: "Toy added to cart.",
            icon: "success",
        });
    };

    // Handle dynamic stars from rating
    const renderStars = () => {
        const fullStars = Math.floor(toy?.rating);
        const halfStar = toy?.rating % 1 !== 0;

        return (
            <div className="flex items-center gap-1 text-orange-500">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} />
                ))}
                {halfStar && <FaStarHalf />}
                <span className="text-gray-700 ml-2">({toy?.rating})</span>
            </div>
        );
    };

    return (
        <div className="p-5 bg-white shadow-md rounded-xl">

            <div className="flex flex-col md:flex-row gap-8">

                <div className="flex justify-center items-center">
                    <img 
                        className="w-60 h-60 object-contain rounded-lg shadow-sm" 
                        src={toy?.pictureURL} 
                        alt={toy?.toyName} 
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{toy?.toyName}</h1>
                    <p className="text-gray-600 text-sm">Seller: {toy?.sellerName}</p>
                    <p className="text-gray-500 text-sm">Brand: <span className="font-semibold">{toy?.brand}</span></p>

                    <div className="mt-2">{renderStars()}</div>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <p className="bg-gray-200 text-gray-700 py-1 px-3 rounded-2xl text-sm">
                            {toy?.subCategory}
                        </p>
                        <p className="bg-blue-200 text-blue-800 py-1 px-3 rounded-2xl text-sm">
                            Age: {toy?.ageRange}
                        </p>
                        <p className="bg-green-200 text-green-800 py-1 px-3 rounded-2xl text-sm">
                            Stock: {toy?.availableQuantity}
                        </p>
                        <p className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-2xl text-sm">
                            Reviews: {toy?.reviewsCount}
                        </p>
                    </div>

                    <p className="font-extrabold text-3xl mt-4 text-primary">
                        ${toy?.price}
                    </p>

                    <button 
                        onClick={handleAdd}
                        className="btn btn-primary mt-4 flex items-center gap-2 text-white px-6"
                    >
                        Add to Cart <BiCartAdd size={22} />
                    </button>
                </div>
            </div>

            <hr className="mt-8" />

            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                <p><span className="font-bold">Dimensions:</span> {toy?.dimensions}</p>
                <p><span className="font-bold">Weight:</span> {toy?.weight}</p>
                <p><span className="font-bold">Material:</span> {toy?.material}</p>
            </div>

            <hr className="mt-5" />

            <div className="mt-8">
                <h1 className="text-2xl font-bold mb-2">Description</h1>
                <p className="text-gray-700">{toy?.updatedDescription || toy?.description}</p>
            </div>

            <hr className="mt-8" />

            <TryNow handeSubmit={handeSubmit}></TryNow>
        </div>
    );
};

export default ToyDetailsComponent;

import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) return <Loader />;

    if (user && user?.email) return children;

    // If user NOT logged in then blur whole page + show modal
    return (
        <div className="relative">

            <div className="fixed inset-0 backdrop-blur-xl bg-black/50 z-40"></div>

            <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white p-8 rounded-xl shadow-2xl max-w-md w-[90%] text-center">
                
                <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
                
                <p className="text-gray-700 mt-2">
                    Please login to continue.
                </p>

                <button
                    onClick={() => navigate("/login", { state: location.pathname })}
                    className="btn btn-primary w-full text-white text-lg mt-6"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default PrivateRoute;

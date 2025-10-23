
import Home from "../pages/Home";
import Root from "../root-layout/Root";
import Profile from "../pages/Profile";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../pages/Error";
import ForYou from "../pages/ForYou";
import AboutUs from "../pages/AboutUs";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/myProfile',
                element: (
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                )
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/toyDetails/:id',
                element: (
                    <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/forYou',
                element: (
                    <PrivateRoute>
                        <ForYou></ForYou>
                    </PrivateRoute>
                )
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;
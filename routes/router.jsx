import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root-layout/Root";
import Profile from "../pages/Profile";
import Favorites from "../pages/Favorites";


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
                element: <Profile></Profile>,
            },
            {
                path: '/favourites',
                element: <Favorites></Favorites>,
            },
        ]
    }
])

export default router;
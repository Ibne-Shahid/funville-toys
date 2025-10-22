import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root-layout/Root";
import Profile from "../pages/Profile";
import AllToys from "../pages/AllToys";



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
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
        ]
    }
])

export default router;
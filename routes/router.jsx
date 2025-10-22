import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root-layout/Root";
import Profile from "../pages/Profile";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import Cart from "../pages/Cart";



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
            {
                path: '/cart',
                element: <Cart></Cart>,
            },
            {
                path: '/toyDetails/:id',
                element: <ToyDetails></ToyDetails>,
            },

        ]
    }
])

export default router;
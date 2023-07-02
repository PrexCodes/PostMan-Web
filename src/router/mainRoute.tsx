import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Layout from "../components/layout/Layout";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomeScreen/>
            }
        ]
    },
    {
        path: '/login',
        element: <SignIn/>,
    },
    {
        path: '/signup',
        element: <SignUp/>,
    },
])
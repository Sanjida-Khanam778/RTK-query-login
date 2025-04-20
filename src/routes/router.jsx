import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import LoginForm from "../components/Login/Login";
import Register from "../components/Register/Register";
import ContactPage from "../components/Contact/Contact";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
        ]
    }
])
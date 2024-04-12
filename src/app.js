import React from "react";
import ReactDOM from "react-dom/client";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";


const AppLayout = ()=> {
    return (
        <>
        <CreateAccount />
        <Login />
        <Welcome />
        <Dashboard />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/signup",
        element: <CreateAccount />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
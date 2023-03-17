import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LoginCode from "../Pages/Login/LoginCode";
import Success from "../Pages/Login/Success";

const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/login-code", element: <LoginCode /> },
    { path: "/success", element: <Success /> },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LoginCode from "../Pages/Login/LoginCode";

const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/login-code", element: <LoginCode /> },
]);

export default router;

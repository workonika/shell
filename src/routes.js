import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const routes = createBrowserRouter([
    {
        path: "/", 
        // component: () => import("./pages/Home"),
        element: <App />
    }
]);
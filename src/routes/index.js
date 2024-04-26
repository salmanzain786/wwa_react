import Home from "../pages/Home";
import Aboutus from "../pages/About";
import Service from "../pages/services/Service";
const routeData = [
    {
        name: "Home",
        path: "/",
        element: Home,
        index: true
    },
    {
        name: "Service",
        path: "/service",
        element: Service,
        index: false
    },
    {
        name: "About Us",
        path: "/about-us",
        element : Aboutus,
        index: false
    }
];

export default routeData;

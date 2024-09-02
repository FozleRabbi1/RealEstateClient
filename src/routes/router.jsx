import { createBrowserRouter } from "react-router-dom";
import Main from "../component/main/Main";
import Home from "../component/pages/home/Home";
import Properties from "../component/pages/propertiesManage/properties/Properties";
import LocationCMS from "../component/pages/propertiesManage/LocationCMS/LocationCMS";
import SupperAdmin from "../component/supperAdmin/SupperAdmin";
import About from "../component/pages/about/About";


const routes  = createBrowserRouter([
    {
        path : "/",
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/Properties",
                element : <Properties/>
            },
            {
                path : "LocationCMS",
                element : <LocationCMS/>
            },
            {
                path : "about",
                element : <About/>
            },

        ]
    },
    {
        path : "supperAdmin",
        element : <SupperAdmin/>
    }


])

export default routes 
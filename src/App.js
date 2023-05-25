import React,{lazy,Suspense} from 'react'; // refer to node modules react
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import RestaurantMenu from "./components/RestaurantMenu"
import {createBrowserRouter,RouterProvider, Outlet}  from "react-router-dom"

const About = lazy(()=>import("./components/About"));

const AppLayout = () => (
    <div className="app">
        <Header/>
        {/* fill different / outlet things */}
        {/* All the children go into the outlet */}
        <Outlet />
        <Footer />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




import React,{useState,lazy,Suspense} from 'react'; // refer to node modules react
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import {createBrowserRouter,RouterProvider, Outlet}  from "react-router-dom"
import {Provider} from "react-redux";
import store from "./utils/store"

const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
    const [user,setUser] = useState({
        name: "Himanshu Chavda",
        email: "himanshuchavda46@gmail.com"
    })
    return (
        <Provider store={store}>
            <UserContext.Provider value={{
                user,
                setUser
            }}>
                <div className="app" >
                    <Header/>
                    {/* fill different / outlet things */}
                    {/* All the children go into the outlet */}
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

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




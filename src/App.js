import React ,{lazy , useState,useEffect}from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import { Suspense } from 'react';
import Shimmer from './components/Shimmer';
import userContext from './utils/userContext';
import {Provider} from "react-redux";
import AppStore from './utils/AppStore';
import Cart from './components/Cart';

const Contact = lazy(() => import('./components/Contact'))


const AppLayout = () => {
    const [userName,setUserName] = useState();
    useEffect(()=> {
        const data = {
            name :"kajal"
        }
        setUserName(data.name);
    },[])

    return (
        <Provider store={AppStore}>
        <userContext.Provider value={{loggedInUser : userName ,setUserName}}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
    )
}

const appRouter = createBrowserRouter (
    [
        {
            path: "/",
            element: <AppLayout/>,
            errorElement: <Error/>,
            children : [
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path:"/contact",
                    element:<Suspense fallback={<Shimmer/>}>
                        <Contact/>
                        </Suspense>

                },
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path: "/restaurants/:resId",
                    element:<RestaurantMenu/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }

            ]
        }

    ]
)

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

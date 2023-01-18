import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Admins from "../pages/Admins/Admins";
import SignIn from "../pages/AuthAdmin/SignIn";
import MakeAdmin from "../pages/AuthAdmin/MakeAdmin";
import Home from "../pages/Home/Home";
import Item from "../pages/Item/Item";
import Items from "../pages/Items/Items";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import NotFound from "../pages/NotFound/NotFound";
import Offer from "../pages/Offer/Offer";
import Offers from "../pages/Offers/Offers";
import Profile from "../pages/Profile/Profile";
import User from "../pages/User/User";
import Users from "../pages/Users/Users";
import PrivateRoute from "../utils/PrivateRoute";
import Package from "../pages/Package/Package";
import Packages from "../pages/Packages/Packages";
import AddItem from "../pages/Items/AddItem";
import UpdateItem from "../pages/Items/UpdateItem";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Main /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "items",
                element: <Items />
            },
            {
                path: "add-item",
                element: <AddItem />
            },
            {
                path: "update-item/:id",
                element: <UpdateItem />
            },
            {
                path: "item/:id",
                element: <Item />
            },
            {
                path: "packages",
                element: <Packages />
            },
            {
                path: "package/:id",
                element: <Package />
            },
            {
                path: "offers",
                element: <Offers />
            },
            {
                path: "offer/:id",
                element: <Offer />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "user/:id",
                element: <User />
            },
            {
                path: "admins",
                element: <Admins />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "leaderboard",
                element: <LeaderBoard />
            },
            {
                path: "make-admin",
                element: <MakeAdmin />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    },
    {
        path: "/signin",
        element: <SignIn />,
    }
])


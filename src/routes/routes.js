import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Admins from "../pages/Admins/Admins";
import SignIn from "../pages/AuthAdmin/SignIn";
import MakeAdmin from "../pages/AuthAdmin/MakeAdmin";
import Home from "../pages/Home/Home";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import User from "../pages/User/User";
import Users from "../pages/Users/Users";
import PrivateRoute from "../utils/PrivateRoute";
import Items from "../pages/Item/AllItems/Items";
import AddItem from "../pages/Item/AllItems/AddItem";
import UpdateItem from "../pages/Item/AllItems/UpdateItem";
import Packages from "../pages/Package/AllPackages/Packages";
import PackageDetails from "../pages/Package/PackageDetails/PackageDetails";
import ItemDetails from "../pages/Item/ItemDetails/ItemDetails";
import AddPackage from "../pages/Package/AllPackages/AddPackage";
import UpdatePackage from "../pages/Package/AllPackages/UpdatePackage";
import Offers from "../pages/Offer/AllOffers/Offers";
import OfferDetails from "../pages/Offer/OfferDetails/OfferDetails";
import AddOffer from "../pages/Offer/AllOffers/AddOffer";
import UpdateOffer from "../pages/Offer/AllOffers/UpdateOffer";
import OrderRequest from "../pages/OrderRequest/OrderRequest";
import OrderRequestDetails from "../pages/OrderRequest/OrderRequestDetails";
import Orders from "../pages/Orders/Orders";
import Error from "../pages/Error/Error";
import Gallery from "../pages/Gallery/Gallery";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Main /></PrivateRoute>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "order-request",
                element: <OrderRequest />
            },
            {
                path: "order-request/:id",
                element: <OrderRequestDetails />
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
                element: <ItemDetails />
            },
            {
                path: "packages",
                element: <Packages />
            },
            {
                path: "package/:id",
                element: <PackageDetails />
            },
            {
                path: "add-package",
                element: <AddPackage />
            },
            {
                path: "update-package/:id",
                element: <UpdatePackage />
            },
            {
                path: "orders",
                element: <Orders />
            },
            {
                path: "offers",
                element: <Offers />
            },
            {
                path: "offer/:id",
                element: <OfferDetails />
            },
            {
                path: "add-offer",
                element: <AddOffer />
            },
            {
                path: "update-offer/:id",
                element: <UpdateOffer />
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
                path: "gallery",
                element: <Gallery />
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


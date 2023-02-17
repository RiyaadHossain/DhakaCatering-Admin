import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHamburger, FaUserCircle } from "react-icons/fa";
import { HiUsers, HiHome } from "react-icons/hi";
import { IoChatbubblesSharp } from "react-icons/io5";
import {
  MdFastfood,
  MdLocalOffer,
  // MdAdminPanelSettings,
  MdLeaderboard,
} from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
// import { RiAdminFill } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { BsHandbagFill } from "react-icons/bs";
import { useGetSidebarDataQuery } from "../features/statData/statDataAPI";
import { getToken } from "../utils/token";
import { AiFillPicture } from "react-icons/ai";
import SidebarSpinner from "../components/SidebarSpinner";

export default function Sidebar() {
  const token = getToken();
  const navigate = useNavigate();

  const signOut = () => {
    toast.success("Admin Signed Out Sucessfully", { id: "succ" });
    window.localStorage.clear("userInfo");
    navigate("/");
  };

  const { data, isFetching } = useGetSidebarDataQuery(token);
  if (isFetching) return <SidebarSpinner />;

  let { users, packages, orders, orderRequests, items, /* admins, */ gallery } =
    data?.data;

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu gap-1 font-medium p-4 w-72 bg-base-200 text-base-content relative">
        {/* <!-- Sidebar content here --> */}
        <div className="text-2xl mt-4 mb-6 font-bold text-center flex items-center gap-3 justify-center">
          <IoFastFoodSharp />
          Dhaka Catering
        </div>
        <li>
          <NavLink to="/">
            <div>
              <HiHome className="sidebar-icon" />
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-request">
            <div>
              <IoChatbubblesSharp className="sidebar-icon" />
              Order Request
            </div>
            <span className="sidebar-num">{orderRequests}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/items">
            <div>
              <FaHamburger className="sidebar-icon" />
              Items
            </div>
            <span className="sidebar-num">{items}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/packages">
            <div>
              <MdFastfood className="sidebar-icon" />
              Package
            </div>
            <span className="sidebar-num">{packages}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <div>
              <BsHandbagFill className="sidebar-icon" />
              Orders
            </div>
            <span className="sidebar-num">{orders}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers">
            <div>
              <MdLocalOffer className="sidebar-icon" />
              Offers
            </div>
            <span className="sidebar-num">0</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <div>
              <HiUsers className="sidebar-icon" />
              Users
            </div>
            <span className="sidebar-num">{users}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery">
            <div>
              <AiFillPicture className="sidebar-icon" />
              Gallery
            </div>
            <span className="sidebar-num">{gallery}</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/admins">
            <div>
              <MdAdminPanelSettings className="sidebar-icon" />
              Admins
            </div>
            <span className="sidebar-num">{admins}</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/leaderboard">
            <div>
              <MdLeaderboard className="sidebar-icon" />
              Leaderboard
            </div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/make-admin">
            <div>
              <RiAdminFill className="sidebar-icon" />
              Make Admin
            </div>
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/profile">
            <div>
              <FaUserCircle className="sidebar-icon" />
              Profile
            </div>
          </NavLink>
        </li>
        <div
          onClick={signOut}
          className="bottom-3 btn btn-error left-6 absolute flex items-center gap-3"
        >
          <BiLogOutCircle className="text-xl" />
          Log out
        </div>
      </ul>
    </div>
  );
}

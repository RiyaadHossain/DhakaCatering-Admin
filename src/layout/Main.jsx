import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { HiMenuAlt1 } from "react-icons/hi";

function Main() {
  return (
      <div className="drawer  drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  p-8 md:p-14">
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button mb-6 lg:mb-0 lg:hidden"
          >
            <HiMenuAlt1 className="text-2xl" />
          </label>
          <Outlet />
        </div>
        <Sidebar />
      </div>
  );
}

export default Main;

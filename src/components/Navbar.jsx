import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import NotificationIn from "./NotificationIn";
import ProfileIn from "./ProfileIn";

export default function Navbar({ user }) {
  return (
    <div className="navbar bg-base-200 rounded-full">
      <div className="flex-1">
        <IoFastFoodSharp className="text-4xl ml-4 md:hidden" />
        <a
          href="ab"
          className="btn hidden md:flex btn-ghost normal-case text-xl"
        >
          Dhaka Catering
        </a>
      </div>
      <div className="flex-none">
        <NotificationIn />
        <ProfileIn user={user} />
      </div>
    </div>
  );
}

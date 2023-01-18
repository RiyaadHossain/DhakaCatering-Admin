import React from "react";
import AdminAvatar from "./AdminAvatar";

export default function ProfileIn() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="" src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <div
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-gray-100 rounded-box w-80 border"
      >
        <AdminAvatar />
      </div>
    </div>
  );
}

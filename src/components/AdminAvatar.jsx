import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAvatar() {
  
  const navigate = useNavigate();

  return (
    <div className="set-center my-6">
      <div className="set-center flex-col gap-4">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className="set-center flex-col gap-2">
          <h4 className="text-2xl font-bold">Kazi Z Hossain</h4>
          <span className="badge">Super Admin</span>
          <button
            onClick={() => navigate("/profile")}
            className="btn btn-primary btn-block mt-2"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

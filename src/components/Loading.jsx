import React from "react";
import "../styles/Loader.css";

export default function Loading() {
  return (
    <div className="set-center flex h-screen w-screen">
      <div className="loader">
        <span className="text-gray-900">Loading...</span>
      </div>
    </div>
  );
}

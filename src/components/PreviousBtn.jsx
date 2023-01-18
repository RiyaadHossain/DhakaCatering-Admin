import React from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function PreviousBtn() {
  const navigate = useNavigate();

  return (
    <div className="relative -bottom-5 mt-2">
      <button onClick={() => navigate(-1)} className="btn gap-2">
        <BsArrowLeftCircleFill className="text-xl" />
        Previous
      </button>
    </div>
  );
}

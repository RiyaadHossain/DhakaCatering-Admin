import React from "react";
import {
  BsCheckCircleFill,
  BsTrashFill,
  /* BsFillXCircleFill, BsPenFill */ BsPencilFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function TableRow({ page }) {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/${page}/1`);
  };

  return (
    <tr
      onClick={page && goToPage}
      className={`${page && "cursor-pointer"} hover`}
    >
      <th className="text-right">1</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Mega Lunch Pack</div>
            <div className="badge badge-ghost badge-sm">Lunch</div>
          </div>
        </div>
      </td>
      <td>7pc</td>
      <td>$499</td>
      <td>
        <span className="badge badge-success badge-sm">Active</span>
      </td>
      <th className="">
        <div className="flex items-center gap-2 text-lg">
          <button className="btn btn-error btn-xs md:btn-sm">
            <BsTrashFill className="text-lg text-gray-700" />
          </button>
          <button className="btn btn-warning btn-xs md:btn-sm">
            <BsPencilFill className="text-lg text-gray-700" />
          </button>
          <button className="btn btn-success btn-xs md:btn-sm">
            <BsCheckCircleFill className="text-lg text-gray-700" />
          </button>
        </div>
      </th>
    </tr>
  );
}

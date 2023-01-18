import React from "react";
import { useNavigate } from "react-router-dom";

export default function FoodTableRow() {
  const navigate = useNavigate();

  return (
    <tr className="hover">
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
      <td>8</td>
      <td>$523</td>
      <td>
        <span className="badge badge-success">Active</span>
      </td>
      <th>
        <button
          onClick={() => navigate("/item/1")}
          className="btn btn-info btn-xs md:btn-sm"
        >
          See Details
        </button>
      </th>
    </tr>
  );
}

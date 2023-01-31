import React from "react";
import { useNavigate } from "react-router-dom";

export default function PackageRow({ item, i }) {
  const navigate = useNavigate();

  return (
    <tr className="hover">
      <th className="text-center">{i + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image.url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
            <div className="badge badge-ghost badge-sm">{item.category}</div>
          </div>
        </div>
      </td>
      <td>{item.sellCount}</td>
      <td>{item.viewCount}</td>
      <td>{item.price * item.sellCount}</td>
      <th>
        <button
          onClick={() => navigate(`/package/${item._id}`)}
          className="btn btn-info btn-xs md:btn-sm"
        >
          See Details
        </button>
      </th>
    </tr>
  );
}

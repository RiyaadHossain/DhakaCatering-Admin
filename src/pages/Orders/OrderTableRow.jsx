import React from "react";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

export default function TableRow({
  order: { userId, foodId, totalPrice, person, createdAt },
  i,
}) {
  const navigate = useNavigate();

  return (
    <tr className="hover">
      <th className="text-right">{i + 1}</th>
      <td
        className="cursor-pointer"
        onClick={() => navigate(`/user/${userId._id}`)}
      >
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={userId.imageUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userId.fullName}</div>
            <div className="badge badge-ghost badge-sm">
              {userId.occupation}
            </div>
          </div>
        </div>
      </td>
      <td
        className="cursor-pointer"
        onClick={() => navigate(`/package/${foodId?._id}`)}
      >
        {foodId?.name} ({foodId.allItems.length})
      </td>
      <td>{person}</td>
      <td>{totalPrice}tk</td>
      <td>{moment.utc(createdAt).format("DD MMM YYYY")}</td>
    </tr>
  );
}

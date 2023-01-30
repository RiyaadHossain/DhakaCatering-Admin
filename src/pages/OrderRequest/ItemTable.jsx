import React from "react";

export default function ItemTable({ item: { id, qty, totalPrice }, i }) {
  return (
    <tr>
      <th className="text-center">
        {i+1}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={id.image.url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {id.name} <span className="text-sm font-light">({id.price}৳)</span>
            </div>
            <div className="badge badge-info badge-sm">{id.category}</div>
          </div>
        </div>
      </td>
      <td>{qty}</td>
      <td>{totalPrice}</td>
      <th>
        <span
          className={`badge badge-sm badge-${
            id.status === "active" ? "success" : "error"
          } font-semibold text-slate-900`}
        >
          {id.status}
        </span>
      </th>
    </tr>
  );
}

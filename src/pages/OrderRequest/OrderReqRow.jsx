import React from "react";

export default function OrderReqRow({ item, i }) {
  let bbg;
  if (item.status === "Pending") {
    bbg = "bg-warning";
  }
  if (item.status === "Rejected") {
    bbg = "bg-error";
  }
  if (item.status === "Approve") {
    bbg = "bg-success";
  }

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="font-bold">{item.name}</div>
        <div className="badge badge-sm">{item.category}</div>
      </td>
      <td>
        {item.allItems.length}
      </td>
      <td>{item.totalPrice}</td>
      <th>
        <button className={`badge badge-sm ${bbg} text-black`}>{item.status}</button>
      </th>
    </tr>
  );
}

import moment from "moment/moment";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderReqRow({ item, i }) {
  const navigate = useNavigate();

  let bbg;
  if (item.status === "Pending") {
    bbg = "bg-warning";
  }
  if (item.status === "Rejected") {
    bbg = "bg-error";
  }
  if (item.status === "Approved") {
    bbg = "bg-success";
  }

  const date = moment(item.date).format("DD MMM YYYY")

  return (
    <tr>
      <th className="text-center">{i + 1}</th>
      <td>
        <div className="font-bold">{item.name}</div>
        <div className="badge badge-sm">{item.category}</div>
      </td>
      <td>{item.allItems.length}</td>
      <td>{item.totalPrice}</td>
      <td>
        <span className={`badge badge-sm ${bbg} text-black font-medium`}>
          {item.status}
        </span>
      </td>
      <td>{date}</td>
      <th>
        <button
          className="btn btn-sm btn-info"
          onClick={() => navigate(`/order-request/${item._id}`)}
        >
          Details
        </button>
      </th>
    </tr>
  );
}

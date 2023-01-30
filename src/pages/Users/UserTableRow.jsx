import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserTableRow({ user, i, page }) {

  const navigate = useNavigate()

  const goToPage = () => {
    navigate(`/user/${user._id}`)
  }

  return (
    <tr
      onClick={page && goToPage}
      className={`${page && "cursor-pointer"} hover`}
    >
      <th className="text-right">{i + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user.imageUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.fullName}</div>
            <div className="badge badge-ghost badge-sm">{user.occupation}</div>
          </div>
        </div>
      </td>
      <td>{user.contactNumber}</td>
      <td>{user.email}</td>
      <td>
        <span
          className={`badge badge-${
            user.status === "active" ? "success" : "error"
          } badge-sm`}
        >
          {user.status === "active" ? "Active" : "Unactive"}
        </span>
      </td>
      {/* <th className="">
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
      </th> */}
    </tr>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopUserStat({ users }) {

  const navigate = useNavigate()

  return (
    <div>
      <h4 className="font-semibold text-xl text-center mb-4">Top Customers</h4>
      <div className="overflow-x-auto w-full rounded-t-xl">
        <table className="table w-full border">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total Purchase</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 2).map((user, i) => (
              <tr className="hover cursor-pointer" onClick={() => navigate(`/user/${user._id}`)}>
                <th className="text-center">{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.fullName}</div>
                      <div className="text-sm opacity-50">
                        {user.occupation}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.totalPurchase}</td>
                <td>{user.orderCount}</td>
                {/* <th>
                  <button className="btn btn-info btn-xs">details</button>
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

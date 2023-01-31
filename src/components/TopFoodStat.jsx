import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopFoodStat({ packages }) {
  const navigate = useNavigate();
  return (
    <div>
      <h4 className="font-semibold text-xl text-center mb-4">Top Sold Items</h4>
      <div className="overflow-x-auto w-full rounded-t-xl">
        <table className="table w-full border">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total Sold</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {packages.slice(0, 2).map((item, i) => (
              <tr
                className="hover cursor-pointer"
                onClick={() => navigate(`/package/${item._id}`)}
              >
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image.url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.category}</div>
                    </div>
                  </div>
                </td>
                <td>{item.sellCount}</td>
                <td>{item.viewCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from "react";

export default function TopUserStat() {
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
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

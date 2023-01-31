import React from "react";
import PackageRow from "./PackageRow";

export default function TopFood({ packages }) {
  return (
    <div>
      <div className="overflow-x-auto w-full border rounded-t-xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total Sold</th>
              <th>Views</th>
              <th>Earning</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {packages.map((item, i) => (
              <PackageRow item={item} i={i} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

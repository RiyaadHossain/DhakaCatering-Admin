import React from "react";
import FoodTableRow from "../../components/FoodTableRow";

export default function TopFood() {
  return (
    <div>
      <div className="overflow-x-auto w-full border rounded-t-xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Item</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <FoodTableRow />
            <FoodTableRow />
            <FoodTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}

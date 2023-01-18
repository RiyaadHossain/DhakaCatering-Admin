import React from "react";
import UserTableRow from "../../components/UserTableRow";

export default function TopUser() {
  return (
    <div>
      <div className="overflow-x-auto w-full border rounded-t-xl ">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Buy</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from "react";
import UserTableRow from "../../components/UserTableRow";

export default function TopUser({ users }) {
  return (
    <div>
      <div className="overflow-x-auto w-full border rounded-t-xl ">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total Buy</th>
              <th>Total Order</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UserTableRow user={user} i={i} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

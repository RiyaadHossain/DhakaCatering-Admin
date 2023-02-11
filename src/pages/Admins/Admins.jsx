import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import { useGetUsersQuery } from "../../features/user/userAPI";
import { getToken } from "../../utils/token";
import UserTableRow from "../Users/UserTableRow";

export default function Admins() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useGetUsersQuery(token);

  if (isFetching) return <Loading />;

  const admins = data.users.filter((user) => user.role.includes("Admin"));

  return (
    <div>
      <PageHeader title="Admins" quantity={admins.length.toString()} />
      {admins?.length ? (
        <div className="overflow-x-auto w-full rounded-t-xl ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Items</th>
                <th>Price</th>
                <th></th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((user, i) => (
                <UserTableRow i={i} user={user} page={true} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" h-[50vh] flex set-center flex-col gap-5">
          <h3 className="text-2xl">No Admin is added yet</h3>
          <button
            onClick={() => navigate("/make-admin")}
            className="btn btn-success btn-sm"
          >
            <BsPlusCircleFill className="mr-1" />
            Add Admin
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import { useGetUsersQuery } from "../../features/user/userAPI";
import { getToken } from "../../utils/token";
import UserTableRow from "./UserTableRow";

export default function Users() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useGetUsersQuery(token);

  if (isFetching) return <Loading />;

  const users = data.users.filter((user) => user.role === "User");

  return (
    <div>
      <PageHeader title="Users" quantity={users.length.toString()} />
      {users.length ? (
        <div className="overflow-x-auto w-full rounded-t-xl ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>email</th>
                <th></th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <UserTableRow key={i} i={i} user={user} page={true} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" h-[50vh] flex set-center flex-col gap-5">
          <h3 className="text-2xl">
            Not a single user started using our application
          </h3>
          <button
            onClick={() => navigate("/add-item")}
            className="btn btn-success btn-sm"
          >
            <BsPlusCircleFill className="mr-1" />
            Do some marketing
          </button>
        </div>
      )}
    </div>
  );
}

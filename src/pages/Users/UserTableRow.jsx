import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useUpdateUserMutation } from "../../features/user/userAPI";
import { getToken } from "../../utils/token";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading";

export default function UserTableRow({ user, i }) {
  const token = getToken();
  const navigate = useNavigate();
  const goToPage = () => navigate(`/user/${user._id}`);

  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateUserMutation();

  const starUser = (star) => {
    updateUser({ token, id: user._id, data: {star} });
  };

  useEffect(() => {
    if (isSuccess) toast.success("User status updated", { id: "succ" });
    if (isError) toast.error("Internal Server Error", { id: "err" });
  }, [isSuccess, isError]);

  if (isLoading) return <Loading />;
  return (
    <tr className="hover">
      <th className="text-right">{i + 1}</th>
      <td onClick={goToPage} className="cursor-pointer">
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user.fullName}</div>
          </div>
        </div>
      </td>
      <td>{user.contactNumber}</td>
      <td>{user.email}</td>
      <td className="px-10">
        {user.star ? (
          <AiFillStar
            className="text-amber-400 cursor-pointer"
            onClick={() => starUser(false)}
          />
        ) : (
          <AiOutlineStar
            className="text-amber-400 cursor-pointer"
            onClick={() => starUser(true)}
          />
        )}
      </td>
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

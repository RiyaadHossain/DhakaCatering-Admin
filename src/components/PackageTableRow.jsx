import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  BsCheckCircleFill,
  BsTrashFill,
  BsFillXCircleFill,
  BsPencilFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeletePackageMutation,
  useUpdatePackageMutation,
} from "../features/package/packageAPI";
import { getToken } from "../utils/token";
import Loading from "./Loading";

export default function PackageTableRow({ item, i }) {
  const [deleteButton, { isError, isLoading, isSuccess, error }] =
    useDeletePackageMutation();

  const [
    updatePackage,
    {
      isError: isErrorUpdate,
      isLoading: isLoadingUpdate,
      isSuccess: isSuccessUpdate,
      error: errorUpdate,
    },
  ] = useUpdatePackageMutation();
  const navigate = useNavigate();
  const goToPage = () => navigate(`/package/${item._id}`);
  const token = getToken();

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${item.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      buttonsStyling: true,
    }).then((result) => {
      if (result.isConfirmed) deleteButton({ id, token });
    });
  };

  useEffect(() => {
    if (isError) toast.error(error.data.error, { id: "err" });
    if (isSuccess && !isError) {
      Swal.fire("Deleted!", "You've successfully deleted.", "success");
    }
    if (isErrorUpdate) toast.error(errorUpdate.data.error, { id: "err" });
    if (isSuccessUpdate) {
      toast.success("Item status Updated successfully", { id: "succ" });
    }
    // if (isLoadingUpdate && !isSuccessUpdate && !isErrorUpdate)
    //   toast.loading("Updating...", { id: "err", duration: 1000 });
  }, [
    isError,
    error,
    isSuccess,
    isSuccessUpdate,
    errorUpdate,
    isErrorUpdate,
    isLoadingUpdate,
  ]);

  if (isLoading) return <Loading />;

  const handleUpdate = (status) => {
    updatePackage({ token, id: item._id, packageData: { status } });
  };

  return (
    <tr className="hover">
      <th className="text-right">{i + 1}</th>
      <td onClick={goToPage} className="cursor-pointer">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item?.image?.url} alt="Item" />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
            <div className="badge badge-ghost badge-sm">{item.category}</div>
          </div>
        </div>
      </td>
      <td>
        <span className={`badge ${item.createdBy === 'Admin' ? 'bg-lime-300' : 'bg-yellow-300'} badge-sm text-slate-900`}>{item.createdBy}</span>
      </td>
      <td>{item.allItems.length}</td>
      <td>{item.price}</td>
      <td>
        {item.status === "active" ? (
          <span className="badge badge-success badge-sm">Active</span>
        ) : (
          <span className="badge badge-error badge-sm">Inactive</span>
        )}
      </td>
      <th className="">
        <div className="flex items-center gap-2 text-lg">
          <button
            onClick={() => deleteItem(item._id)}
            className="btn btn-error btn-xs md:btn-sm"
          >
            <BsTrashFill className="text-lg text-gray-700" />
          </button>
          <button
            onClick={() => navigate(`/update-package/${item._id}`)}
            className="btn btn-info btn-xs md:btn-sm"
          >
            <BsPencilFill className="text-lg text-gray-700" />
          </button>
          {item.status === "active" ? (
            <button
              onClick={() => handleUpdate("unavailable")}
              className="btn btn-warning btn-xs md:btn-sm"
            >
              <BsFillXCircleFill className="text-lg text-gray-700" />
            </button>
          ) : (
            <button
              onClick={() => handleUpdate("active")}
              className="btn btn-success btn-xs md:btn-sm"
            >
              <BsCheckCircleFill className="text-lg text-gray-700" />
            </button>
          )}
        </div>
      </th>
    </tr>
  );
}

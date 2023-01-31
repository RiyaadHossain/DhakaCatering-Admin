import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";
import PageHeader from "../../../components/PageHeader";
import PreviousBtn from "../../../components/PreviousBtn";
import {
  useDeleteItemMutation,
  useGetItemQuery,
  useUpdateItemMutation,
} from "../../../features/item/itemAPI";
import { getToken } from "../../../utils/token";
import Navigation from "./Navigation";

export default function ItemDetails() {
  const token = getToken();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = useGetItemQuery(id);
  const [deleteButton, { isError, isLoading, isSuccess, error }] =
    useDeleteItemMutation();

  const [
    updateItem,
    {
      isError: isErrorUpdate,
      isLoading: isLoadingUpdate,
      isSuccess: isSuccessUpdate,
      error: errorUpdate,
    },
  ] = useUpdateItemMutation();

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

  if (isFetching || isLoading) return <Loading />;

  const { name, price, description, status, image, sellCount } = data.data;

  const deleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      buttonsStyling: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteButton({ id, token });
        navigate("/items");
      }
    });
  };

  const handleUpdate = (status) => {
    updateItem({ token, id, itemData: { status } });
  };

  return (
    <>
      <div className="max-w-[820px]">
        <PageHeader title="Item Details" quantity={sellCount.toString()} />
        <div className="mt-8">
          <div className="border-4 border-slate-500 rounded-md ">
            <img
              src={image.url}
              className="w-full h-96 object-cover rounded-sm"
              alt=""
            />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-2xl">{name}</h3>
              {status === "active" ? (
                <span className="badge badge-success">Active</span>
              ) : (
                <span className="badge badge-error">Inactive</span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="mt-1">
                  <span className="font-semibold">Price:</span> {price} ৳
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/update-item/${id}`)}
                  className="btn btn-info btn-sm"
                >
                  Edit
                </button>
                <button onClick={deleteItem} className="btn btn-error btn-sm">
                  Delete
                </button>
                {status === "active" ? (
                  <button
                    onClick={() => handleUpdate("unavailable")}
                    className="btn btn-warning btn-sm"
                  >
                    <BsXCircleFill className="text-lg text-gray-700" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdate("active")}
                    className="btn btn-warning btn-sm"
                  >
                    <BsCheckCircleFill className="text-lg text-gray-700" />
                  </button>
                )}
              </div>
            </div>
            <p className="text-gray-500 font-light">{description}</p>
          </div>
        </div>
        <Navigation foodId={id} />
      </div>
      <PreviousBtn />
    </>
  );
}

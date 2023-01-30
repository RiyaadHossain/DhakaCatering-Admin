import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import PreviousBtn from "../../components/PreviousBtn";
import {
  useGetOrderRequestQuery,
  useUpdateOrderRequestMutation,
} from "../../features/orderRequest/orderRequestAPI";
import { getToken } from "../../utils/token";
import Navigation from "../Item/ItemDetails/Navigation";

export default function OrderRequestDetails() {
  let bbg;
  const token = getToken();
  const { id } = useParams();
  const { data, isFetching } = useGetOrderRequestQuery({ id, token });
  const [updateOReq, { isLoading, isError, isSuccess }] =
    useUpdateOrderRequestMutation();
  if (isFetching) return <Loading />;
  const {
    orderRequest: { name, category, allItems, totalPrice, createdBy, status },
  } = data;

  if (status === "Pending") {
    bbg = "bg-warning";
  }
  if (status === "Rejected") {
    bbg = "bg-error";
  }
  if (status === "Approve") {
    bbg = "bg-success";
  }

  return (
    <>
      <div className="max-w-[820px]">
        <PageHeader title="Item Details" />
        <div className="mt-8">
          <div className="border-4 border-slate-500 rounded-md ">
            {/* <img
              src={image.url}
              className="w-full h-96 object-cover rounded-sm"
              alt=""
            /> */}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-2xl">{name}</h3>
              <span className={`badge ${bbg} text-black`}>{status}</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="mt-1">
                  <span className="font-semibold">Price:</span> {totalPrice} ৳
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* <button
                  onClick={() => navigate(`/update-package/${id}`)}
                  className="btn btn-info btn-sm"
                >
                  Edit
                </button>
                <button onClick={deleteItem} className="btn btn-error btn-sm">
                  Delete
                </button> */}
                {status === "active" ? (
                  <button
                    onClick={() => updateOReq("Approve")}
                    className="btn btn-warning btn-sm"
                  >
                    <BsXCircleFill className="text-lg text-gray-700" />
                  </button>
                ) : (
                  <button
                    onClick={() => updateOReq("Reject")}
                    className="btn btn-warning btn-sm"
                  >
                    <BsCheckCircleFill className="text-lg text-gray-700" />
                  </button>
                )}
              </div>
            </div>
            {/* <p className="text-gray-500 font-light">{description}</p> */}
          </div>
        </div>
        <Navigation />
      </div>
      <PreviousBtn />
    </>
  );
}

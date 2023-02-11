import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import PreviousBtn from "../../components/PreviousBtn";
import {
  useGetOrderRequestQuery,
  useUpdateOrderRequestMutation,
} from "../../features/orderRequest/orderRequestAPI";
import { getToken } from "../../utils/token";
import ItemTable from "./ItemTable";

export default function OrderRequestDetails() {
  let bbg;
  const [orderStatus, setOrderStatus] = useState("");
  const token = getToken();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = useGetOrderRequestQuery({ id, token });
  const [updateOReq, { isLoading, isError, isSuccess }] =
    useUpdateOrderRequestMutation();

  useEffect(() => {
    if (isLoading) toast.loading("Loading...", { id: "load", duration: 900 });

    if (isSuccess)
      toast.success(`Order Request ${orderStatus} Successfully`, {
        id: "succ",
        style: {
          minWidth: "380px",
        },
        success: {
          duration: 3000,
          icon: "🔥",
        },
      });

    if (isError)
      toast.error("Internal Server Error", {
        id: "err",
      });
  }, [isLoading, isError, isSuccess, orderStatus]);

  if (isFetching) return <Loading />;

  const {
    orderRequest: { name, category, allItems, totalPrice, createdBy, status, date },
  } = data;

  if (status === "Pending") {
    bbg = "bg-warning";
  }
  if (status === "Rejected") {
    bbg = "bg-error";
  }
  if (status === "Approved") {
    bbg = "bg-success";
  }

  const handleUpdate = (updatedStatus) => {
    setOrderStatus(updatedStatus);
    updateOReq({ status: updatedStatus, token, id });
  };

  const dateFormatted = moment(date).format("DD MMM YYYY")

  return (
    <>
      <div className="max-w-[1020px] mb-10">
        <PageHeader title="Order Request" />
        <div className="flex items-center justify-between mb-2 mt-6">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-2xl">{name} </h3>
            <span className="badge badge-ghost badge-sm">{category}</span>
          </div>
          <span className={`badge ${bbg} text-black`}>{status}</span>
        </div>
        <div className="overflow-x-auto w-full rounded-t-lg">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item, i) => (
                <ItemTable key={i} i={i} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap flex-col gap-3">
          <div className="flex flex-wrap mt-2 gap-2 items-end justify-between">
            <div
              onClick={() => navigate(`/user/${createdBy.id._id}`)}
              className="flex cursor-pointer bg-slate-700 rounded-md px-4 p-2 items-center gap-5"
            >
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={createdBy.id.imageUrl} alt="" />
                </div>
              </div>
              <div>
                <p className="font-semibold ">{createdBy.id.fullName}</p>
                <span className="badge badge-sm badge-secondary">
                  {createdBy.id.occupation}
                </span>
              </div>
            </div>
            <div>
              <p className="text-end mb-5 font-semibold">{dateFormatted}</p>
              <p className="text-end mb-3 text-lg">
                <span className="font-semibold">Price:</span> {totalPrice}৳
              </p>
              <div className="flex gap-5 items-center">
                {status === "Pending" ? (
                  <>
                    <button
                      onClick={() => handleUpdate("Approved")}
                      className="btn btn-sm btn-success"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleUpdate("Rejected")}
                      className="btn btn-sm btn-error"
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <button className="btn btn-disabled border-slate-700">
                    Aready {status}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreviousBtn />
    </>
  );
}

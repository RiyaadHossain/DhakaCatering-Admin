import { all } from "axios";
import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
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
  const token = getToken();
  const { id } = useParams();
  const navigate = useNavigate();
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
      <div className="max-w-[820px] mb-10">
        <PageHeader title="Order Request" />
        <div className="text-end">
          <span className={`badge ${bbg} text-black mb-4`}>{status}</span>
        </div>
        <div className="overflow-x-auto w-full rounded-t-lg">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item) => (
                <ItemTable item={item} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-2xl">{name} </h3>
            <p>
              <span className="font-semibold">Price:</span> {totalPrice} ৳
            </p>
          </div>
          <div className="flex flex-wrap mt-2 gap-2 items-end justify-between">
            <div className="flex gap-5 items-center">
              <button className="btn btn-sm btn-success">Approve</button>
              <button className="btn btn-sm btn-error">Reject</button>
            </div>
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
          </div>
        </div>
      </div>
      <PreviousBtn />
    </>
  );
}

import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import { useGetOrderRequestsQuery } from "../../features/orderRequest/orderRequestAPI";
import { getToken } from "../../utils/token";
import OrderReqRow from "./OrderReqRow";

export default function OrderRequest() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useGetOrderRequestsQuery(token);

  if (isFetching) return <Loading />;
  const button = (
    <button
      onClick={() => navigate("/add-package")}
      className="btn btn-success btn-sm"
    >
      <BsPlusCircleFill className="mr-1" />
      Add New
    </button>
  );

  const orderRequests = data?.orderRequests;

  return (
    <div>
      <PageHeader title="Order Request" quantity={orderRequests?.length} />
      {orderRequests?.length ? (
        <div className="overflow-x-auto w-full rounded-t-md ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Items</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- rows --> */}
              {orderRequests?.map((item, i) => (
                <OrderReqRow key={i} i={i} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" h-[50vh] flex set-center flex-col gap-5">
          <h3 className="text-2xl">No Package is added yet!</h3>
          {button}
        </div>
      )}
    </div>
  );
}

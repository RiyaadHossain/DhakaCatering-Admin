import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import OrderTableRow from "./OrderTableRow";
import { useGetOrdersQuery } from "../../features/order/order";
import { getToken } from "../../utils/token";

export default function Orders() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useGetOrdersQuery(token);

  if (isFetching) return <Loading />;
  const orders = data?.orders;

  return (
    <div>
      <PageHeader title="Orders" quantity={orders.length?.toString()} />
      {orders.length ? (
        <div className="overflow-x-auto w-full rounded-t-xl ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Package</th>
                <th>Total Purchase</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <OrderTableRow key={i} i={i} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" h-[50vh] flex set-center flex-col gap-5">
          <h3 className="text-2xl">No more Offer is added yet</h3>
          <button
            onClick={() => navigate("/add-item")}
            className="btn btn-success btn-sm"
          >
            <BsPlusCircleFill className="mr-1" />
            Add New
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import OrderTableRow from "./OrderTableRow";
import { useGetOrdersQuery } from "../../features/order/order";
import { getToken } from "../../utils/token";

export default function Orders() {
  const token = getToken();
  const { data, isFetching } = useGetOrdersQuery(token);

  if (isFetching) return <Loading />;
  let orders = data?.orders;
  orders = orders.filter((order) => order.foodId && order.userId);

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
                <th>Person</th>
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
          <h3 className="text-2xl">
            No more Odder is being created is added yet
          </h3>
        </div>
      )}
    </div>
  );
}

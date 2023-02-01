import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ItemTableRow from "../../../components/ItemTableRow";
import Loading from "../../../components/Loading";
import PageHeader from "../../../components/PageHeader";
import { useGetItemsQuery } from "../../../features/item/itemAPI";

export default function Items() {
  const navigate = useNavigate();
  const { data, isFetching } = useGetItemsQuery();

  if (isFetching) return <Loading />;

  const button = (
    <button
      onClick={() => navigate("/add-item")}
      className="btn btn-success btn-sm"
    >
      <BsPlusCircleFill className="mr-1" />
      Add New
    </button>
  );

  return (
    <div>
      <PageHeader
        title="Items"
        quantity={data?.data?.length}
        button={data?.data?.length && button}
      />
      {data?.data?.length ? (
        <div className="overflow-x-auto w-full rounded-t-xl ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- rows --> */}
              {data?.data.map((item, i) => (
                <ItemTableRow key={i} i={i} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" h-[50vh] flex set-center flex-col gap-5">
          <h3 className="text-2xl">No more Item is added yet</h3>
          {button}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import TableRow from "../../../components/TableRow";

export default function Offers() {
  const navigate = useNavigate();

  // if (isFetching) return <Loading />;

  const data = { data: [] };

  return (
    <div>
      <PageHeader title="Offers" /* quantity="4" */ />
      {data?.data?.length ? (
        <div className="overflow-x-auto w-full rounded-t-xl ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Items</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
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

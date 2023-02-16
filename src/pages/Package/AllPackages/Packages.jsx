import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import PackageTableRow from "../../../components/PackageTableRow";
import PageHeader from "../../../components/PageHeader";
import { useGetPackagesQuery } from "../../../features/package/packageAPI";

export default function Packages() {
  const navigate = useNavigate();
  const { data, isFetching } = useGetPackagesQuery();

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

  return (
    <div>
      <PageHeader
        title="Packages"
        quantity={data?.data?.length}
        button={button}
      />
      {data?.data?.length ? (
        <div className="overflow-x-auto w-full rounded-t-xl ">
          <table className="table w-full border">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Create</th>
                <th>Items</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- rows --> */}
              {data?.data.map((item, i) => (
                <PackageTableRow key={i} i={i} item={item} />
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

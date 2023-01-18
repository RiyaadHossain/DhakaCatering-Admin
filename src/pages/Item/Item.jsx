import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import PreviousBtn from "../../components/PreviousBtn";
import { useGetItemQuery } from "../../features/item/itemAPI";
import Navigation from "./Navigation";

export default function Item() {
  const { id } = useParams();
  const { data, isFetching } = useGetItemQuery(id);
  if (isFetching) return <Loading />;
  console.log(data.data.sellCount)
  const { name, price, description, status, imgURL, sellCount } = data.data;

  return (
    <>
      <div className="max-w-[820px]">
        <PageHeader title="Spicy Burger" quantity={sellCount.toString()} />
        <div className="mt-8">
          <div className="border-4 border-slate-500 rounded-md ">
            <img
              src={imgURL}
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
                <button className="btn btn-info btn-sm">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
                {status === "active" ? (
                  <button className="btn btn-warning btn-sm">
                    <BsXCircleFill className="text-lg text-gray-700" />
                  </button>
                ) : (
                  <button className="btn btn-warning btn-sm">
                    <BsCheckCircleFill className="text-lg text-gray-700" />
                  </button>
                )}
              </div>
            </div>
            <p className="text-gray-500 font-light">{description}</p>
          </div>
        </div>
        <Navigation />
      </div>
      <PreviousBtn />
    </>
  );
}

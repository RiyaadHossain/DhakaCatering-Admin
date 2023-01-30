import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getToken } from "../../utils/token";
import Loading from "../../components/Loading";
import UserBadge from "../../components/UserBadge";
import PageHeader from "../../components/PageHeader";
import PreviousBtn from "../../components/PreviousBtn";
import { useGetUserQuery } from "../../features/user/userAPI";

export default function User() {
  const token = getToken();
  const { id } = useParams();
  const { data, isFetching } = useGetUserQuery({ id, token });
  if (isFetching) return <Loading />;
  const {
    email,
    fullName,
    imageUrl,
    contactNumber,
    occupation,
    address,
    createdAt,
  } = data?.user;

  return (
    <>
      <PageHeader title="User Details" />
      <div className="py-5 md:py-12">
        <div className="card max-w-xl mx-auto bg-slate-200 shadow-xl ">
          <UserBadge />
          <figure className="px-10">
            <img
              src={imageUrl}
              alt={fullName}
              className="rounded-full object-cover h-96 w-96"
            />
          </figure>
          <div className="card-body items-start text-left mt-4">
            <div className=" flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold">{fullName}</h2>
              <p className="text-right">
                <span className="font-semibold">Joined On:</span>{" "}
                {moment(createdAt).format("DD MMM YYYY")}
              </p>
            </div>
            <span className="badge badge-sm font-semibold">{occupation}</span>
            <div className="text-left mt-2">
              <p>
                <span className="font-semibold">Phone:</span> {contactNumber}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {email}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {address ? address : "Not Provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PreviousBtn />
    </>
  );
}

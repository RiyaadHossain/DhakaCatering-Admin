import React from "react";
import PageHeader from "../../components/PageHeader";
import PreviousBtn from "../../components/PreviousBtn";
import UserBadge from "../../components/UserBadge";

export default function User() {
  return (
    <>
      <PageHeader title={`Riyad Hossain`} />
      <div className="py-5 md:py-12">
        <div className="card max-w-3xl mx-auto bg-slate-200 shadow-xl ">
          <UserBadge />
          <figure className="px-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">
              Riyad Hossain
              <span className="text-green-600 font-semibold text-base">
                {" "}
                ($863)
              </span>
            </h2>
            <span className="badge">Student</span>
            <div className="text-left mt-2">
              <p>
                <span className="font-semibold">Phone:</span> 01703790978
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                riyadhossain@gmail.com
              </p>
              <p>
                <span className="font-semibold">Address:</span> Kundoshi,
                Lohagara, Narail
              </p>
            </div>
          </div>
        </div>
      </div>
      <PreviousBtn />
    </>
  );
}

import React from "react";
import PageHeader from "../../../components/PageHeader";
import PreviousBtn from "../../../components/PreviousBtn";

export default function OfferDetails() {
  return (
    <>
      <div className="max-w-[820px]">
        <PageHeader title="But 1 Get 1 Free" />
        <div className="mt-8">
          <div className="border-4 border-slate-500 rounded-md ">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg?crop=1.00xw:0.755xh;0,0.166xh&resize=980:*"
              className="w-full h-96 object-cover rounded-sm"
              alt=""
            />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-2xl">Buy one Get One Free</h3>
              <span className="badge badge-success">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p>
                  <span className="font-semibold">Total Item:</span> 8pc
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Price:</span> $403
                </p>
              </div>
              <button className="btn btn-sm w-24">Edit</button>
            </div>
            <p className="text-gray-500 font-light">
              A hamburger, or simply burger, is a food consisting of fillings—
              usually a patty of ground meat, typically beef—placed inside a
              sliced bun or bread roll. Hamburgers are often served with cheese
              or chilis and are frequently placed on sesame seed buns.
            </p>
          </div>
        </div>
        {/* <Navigation /> */}
      </div>
      <PreviousBtn />
    </>
  );
}

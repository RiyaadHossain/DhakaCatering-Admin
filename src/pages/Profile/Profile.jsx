import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import PageHeader from "../../components/PageHeader";

export default function Profile() {
  return (
    <div>
      <PageHeader title="Profile" />
      <div className="card bg-base-200 mt-10 px-2 md:px-10 py-8 shadow-xl max-w-5xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-3xl font-bold">Faria Khanam</h2>
          <span className="badge mb-5">Super Admin</span>
          <p className="max-w-lg">
            You have all the super authority in this application. Make sure you
            use those properly.
          </p>
          <div className="card-actions mt-5 gap-3 md:gap-6">
            <button className="social-icon">
              <BsFacebook className="text-2xl text-sky-600" />
            </button>
            <button className="social-icon">
              <BsInstagram className="text-2xl text-orange-600" />
            </button>
            <button className="social-icon">
              <BsYoutube className="text-2xl text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

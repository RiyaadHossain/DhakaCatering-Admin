import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import { useUserPersistencyQuery } from "../../features/auth/authAPI";
import { getToken } from "../../utils/token";

export default function Profile() {
  const token = getToken();
  const { data, isFetching } = useUserPersistencyQuery(token);
  if (isFetching) return <Loading />;
  const { fullName, role, imageUrl } = data?.data || {};
  console.log(data);

  return (
    <div>
      <PageHeader title="Profile" />
      <div className="card bg-base-200 mt-10 px-2 md:px-10 py-8 shadow-xl max-w-5xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt="Shoes"
            className="rounded-xl max-h-96 w-96 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-3xl font-bold">{fullName}</h2>
          <span className="badge mb-5">{role}</span>
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

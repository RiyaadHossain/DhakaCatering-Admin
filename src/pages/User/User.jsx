import React, { useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getToken } from "../../utils/token";
import Loading from "../../components/Loading";
import UserBadge from "../../components/UserBadge";
import PageHeader from "../../components/PageHeader";
import PreviousBtn from "../../components/PreviousBtn";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../features/user/userAPI";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function User() {
  const token = getToken();
  const { id } = useParams();
  const { data, isFetching } = useGetUserQuery({ id, token });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateUserMutation();

  useEffect(() => {
    if (isSuccess)
      toast.success("User Note updated successfully", { id: "succ" });
    if (isError) toast.error("Internal Server Error", { id: "err" });
  }, [isSuccess, isError]);

  if (isFetching || isLoading) return <Loading />;

  const {
    note,
    email,
    fullName,
    imageUrl,
    contactNumber,
    occupation,
    address,
    star,
    createdAt,
  } = data?.user;

  const updateNote = (note) => {
    console.log(note);
    updateUser({ token, id, data:note } );
    reset();
  };

  return (
    <>
      <PageHeader title="User Details" />
      <div className="py-5 md:py-12">
        <div className="card max-w-xl mx-auto bg-slate-300 text-slate-800 shadow-xl ">
          {star ? <UserBadge /> : null}
          <figure className="px-10 mt-8">
            <img
              src={imageUrl}
              alt={fullName}
              className="rounded-full border-2 object-cover h-96 w-96"
            />
          </figure>
          <div className="card-body  text-left mt-4">
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
            <form onSubmit={handleSubmit(updateNote)}>
              <div className="form-control w-full">
                <textarea
                  rows={4}
                  defaultValue={note ? note : ""}
                  placeholder="User Note"
                  className="textarea resize-none text-slate-300 bg-slate-800"
                  {...register("note", { required: true })}
                />
                {errors.note && (
                  <span className="text-error text-xs text-left mt-1">
                    Note is required
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-success btn-sm mt-2">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      <PreviousBtn />
    </>
  );
}

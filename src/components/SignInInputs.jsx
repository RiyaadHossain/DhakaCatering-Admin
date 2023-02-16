import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAdminSignInMutation } from "../features/auth/authAPI";
import { storeToken } from "../utils/token";

export default function SignInInputs() {
  const [signIn, { isError, isLoading, error, data }] =
    useAdminSignInMutation();
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isLoading)
      toast.loading("Signing In...", { id: "err", duration: 1000 });
    if (isError) toast.error("Something went wrong", { id: "err" });
    if (data?.status === "fail") toast.error(data.error, { id: "err" });
    if (data?.status === "success") {
      toast.success("Signed In successfully", { id: "succ" });
      storeToken({ token: data?.data?.token, email: data?.data?.user?.email });
      navigate("/");
    }
  }, [isError, isLoading, error, data, navigate]);

  const onSubmit = (data) => {
    signIn(data);
    reset();
  };

  return (
    <div className="card justify-center md:min-w-[300px] lg:min-w-[350px] shadow-2xl bg-base-200 md:bg-base-100">
      <div className="card-body">
        <h3 className="text-center text-2xl font-bold mb-4">Sign In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-error text-xs text-left mt-1">
                Email is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-error text-xs text-left mt-1">
                Password is required
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../../components/PageHeader";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../../components/Loading";
import { usePostPackageMutation } from "../../../features/package/packageAPI";
import { toast } from "react-hot-toast";
import { getToken } from "../../../utils/token";
import ChooseItem from "./ChooseItem";

export default function AddPackage() {
  let [items, setItems] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);
  const token = getToken();
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
  const imgStorage_key = "b20e07a3b33d3ccbb413087c3d9d148d";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createPackage, { isLoading, isError, isSuccess, error }] =
    usePostPackageMutation();

  const submitForm = async (packageData) => {
    setLoading(true);
    const allItems = items.map((item) => {
      return { id: item._id, qty: item.qty, totalPrice: item.totalPrice };
    });
    const imageData = packageData?.imgURL[0];
    const formData = new FormData();
    formData.append("image", imageData);
    const URL = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
    const { data } = await axios.post(URL, formData);

    if (data.success) {
      packageData = {
        allItems,
        ...packageData,
        image: { title: data.data.title, url: data.data.url },
      };

      createPackage({ token, packageData });
      setLoading(false);
    } else {
      setLoading(false);
      MySwal.fire({
        title: <strong>Oops!</strong>,
        html: <span>Cloundn't upload the image.</span>,
        icon: "error",
      });
    }

    reset();
    setItems([]);
    setTotalPrice(0);
  };

  useEffect(() => {
    if (isSuccess && !isLoading && !isError) {
      MySwal.fire({
        title: <strong>Great!</strong>,
        html: <span>Created Package Successfully.</span>,
        icon: "success",
      });
    }

    if (isError) toast.error(error.data.error, { id: "err" });
  }, [loading, isLoading, isError, error, isSuccess, MySwal]);

  if (loading /* || isLoading */) return <Loading />;

  return (
    <div>
      <PageHeader title="Add Package" />
      <div className="card flex-shrink-0 max-w-4xl mx-auto lg:mt-14 shadow-2xl bg-slate-200">
        <div className="card-body">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-3"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Rice"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-error text-xs text-left mt-1">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="90tk"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-error text-xs text-left mt-1">
                  Price is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                {...register("imgURL" /* { required: true } */)}
                className="file-input w-full"
              />
              {errors.imgURL && (
                <span className="text-error text-xs text-left mt-1">
                  Image is required
                </span>
              )}
            </div>
            <div className="form-control flex-row gap-5 md:gap-16 justify-around items-center flex-wrap">
              <div className="form-control min-w-[200px]">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  defaultValue="Bronze"
                  className="select w-full"
                  {...register("category")}
                >
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Golden">Golden</option>
                  <option value="Diamond">Diamond</option>
                </select>
              </div>
              <div>
                <label className="label" htmlFor="status">
                  <span className="label-text">Status</span>
                </label>
                <div className="flex gap-5 relative ">
                  <label className="label cursor-pointer">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        {...register("status")}
                        value="active"
                        defaultChecked
                      />
                      <span className="label-text font-semibold text-xs">
                        Active
                      </span>
                    </div>
                  </label>
                  <label className="label cursor-pointer">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-red-500"
                        {...register("status")}
                        value="unavailable"
                      />
                      <span className="label-text font-semibold text-xs">
                        Unavailable
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {items.length ? (
                  <span className="text-sm text-info relative -bottom-1">{` ${items.length} Items (${totalPrice}tk)`}</span>
                ) : null}
                <label htmlFor="my-modal" className="btn btn-wide">
                  {items.length ? `ReSelect!` : "Select Item"}
                </label>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                rows={3}
                placeholder="Bio"
                className="textarea resize-none"
                {...register("description", {
                  required: true,
                  minLength: 15,
                  maxLength: 650,
                })}
              ></textarea>
              {errors.description && (
                <span className="text-error text-xs text-left mt-1">
                  Description characters should be 15 to 650
                </span>
              )}
            </div>
            <div className="form-control mx-auto mt-6">
              <button type="submit" className="btn btn-wide btn-primary">
                Add Package
              </button>
            </div>
          </form>
        </div>
      </div>
      <ChooseItem
        items={items}
        setItems={setItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}

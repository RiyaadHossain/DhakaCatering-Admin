import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../../components/Loading";
import PageHeader from "../../../components/PageHeader";
import {
  useGetItemQuery,
  useUpdateItemMutation,
} from "../../../features/item/itemAPI";
import { getToken } from "../../../utils/token";

export default function UpdateItem() {
  const token = getToken();
  const { id } = useParams();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
  const imgStorage_key = "b20e07a3b33d3ccbb413087c3d9d148d";
  const { data, isLoading: itemLoading } = useGetItemQuery(id);
  const [updateItem, { isError, isSuccess, isLoading, error }] =
    useUpdateItemMutation();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      MySwal.fire({
        title: <strong>Great!</strong>,
        html: <span>Item Updated Successfully.</span>,
        icon: "success",
      });
      navigate("/items");
    }

    if (isError) toast.error(error.data.error, { id: "err" });
  }, [loading, isLoading, isError, error, isSuccess, MySwal, navigate]);

  if (loading || isLoading || itemLoading) return <Loading />;

  let { name, price, description, image, category, status, discountedPrice } =
    data?.data;

  const handleUpdate = async (itemData) => {
    setLoading(true);
    const imageData = itemData?.imgURL[0];

    if (imageData) {
      const formData = new FormData();
      formData.append("image", imageData);
      const URL = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
      const { data } = await axios.post(URL, formData);
      if (data.success) {
        image = { title: data.data.title, url: data.data.url };
      }
    }

    itemData = { ...itemData, image };
    updateItem({ token, itemData, id });
    setLoading(false);

    reset();
  };

  return (
    <div>
      <PageHeader title="Update Item" />
      <div className="card flex-shrink-0 w-full shadow-2xl bg-slate-200">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Rice"
                defaultValue={name}
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-error text-xs text-left mt-1">
                  Name is required
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="90tk"
                  defaultValue={price}
                  className="input input-bordered"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-error text-xs text-left mt-1">
                    Price is required
                  </span>
                )}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Discount Price</span>
                </label>
                <input
                  type="text"
                  defaultValue={discountedPrice}
                  className="input input-bordered"
                  {...register("discountedPrice")}
                />
              </div>
            </div>
            <div className="flex items-end gap-5 my-3">
              <img
                src={image.url}
                alt=""
                className="w-52 h-52 object-cover rounded-md"
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image :</span>
                </label>
                <input
                  type="file"
                  {...register("imgURL")}
                  className="file-input w-full"
                />
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
                defaultValue={description}
                className="textarea resize-none"
                {...register("description", { required: true })}
              ></textarea>
              {description.price && (
                <span className="text-error text-xs text-left mt-1">
                  Description is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="select w-full"
                {...register("category", { required: true })}
                defaultValue={category}
              >
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>All</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <div className="flex gap-5 relative -top-2">
                <label htmlFor="active-field" className="label cursor-pointer">
                  <div className="flex items-center gap-1">
                    <input
                      {...register("status", { required: true })}
                      id="active-field"
                      type="radio"
                      // name="status"
                      value="active"
                      className="radio checked:bg-blue-500"
                      defaultChecked={status === "active"}
                    />
                    <span className="label-text font-semibold text-xs">
                      Active
                    </span>
                  </div>
                </label>
                <label
                  htmlFor="unavailable-field"
                  className="label cursor-pointer"
                >
                  <div className="flex items-center gap-1">
                    <input
                      {...register("status", { required: true })}
                      id="unavailable-field"
                      type="radio"
                      // name="status"
                      value="unavailable"
                      className="radio checked:bg-red-500"
                      defaultChecked={status === "unavailable"}
                    />
                    <span className="label-text font-semibold text-xs">
                      Unavailable
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-control"></div>
            <div className="form-control mx-auto mt-6">
              <button
                type="submit"
                className="btn btn-wide mx-auto btn-primary"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { getToken } from "../../../utils/token";
import Loading from "../../../components/Loading";
import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/PageHeader";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetPackageQuery,
  useUpdatePackageMutation,
} from "../../../features/package/packageAPI";
import UpdatePackageItem from "../../../components/UpdatePackageItem";

export default function UpdatePackage() {
  const token = getToken();
  const { id } = useParams();
  const navigate = useNavigate();
  let [items, setItems] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
  const imgStorage_key = "b20e07a3b33d3ccbb413087c3d9d148d";
  const { data, isLoading: itemLoading } = useGetPackageQuery(id);
  const [UpdatePackage, { isError, isSuccess, isLoading, error }] =
    useUpdatePackageMutation();

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
        html: <span>Updated item Successfully.</span>,
        icon: "success",
      });
      navigate("/packages");
    }

    if (isError) toast.error(error.data.error, { id: "err" });
  }, [loading, isLoading, isError, error, isSuccess, MySwal, navigate]);

  if (loading || isLoading || itemLoading) return <Loading />;

  let { name, price, description, image, category, status, allItems } =
    data?.data;

  const handleUpdate = async (packageData) => {
    let data;
    setLoading(true);
    const allItems = items.map((item) => {
      return { id: item._id, qty: item.qty, totalPrice: item.totalPrice };
    });
    const imageData = packageData?.imgURL[0];

    if (imageData) {
      const formData = new FormData();
      formData.append("image", imageData);
      const URL = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
      data = await (await axios.post(URL, formData)).data;
    }

    if (!imageData) {
      packageData = {
        allItems,
        ...packageData,
        image: { title: image.title, url: image.url },
      };

      UpdatePackage({ token, packageData, id });
      setLoading(false);
    } else if (data?.success) {
      packageData = {
        allItems,
        ...packageData,
        image: { title: data.data.title, url: data.data.url },
      };

      UpdatePackage({ token, packageData, id });
      setLoading(false);
    } else {
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

  const setValue = () => {
    setItems(allItems);
    setTotalPrice(price);
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
            <div className="form-control">
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
            <div className="flex items-end gap-5 my-3">
              <img
                src={image.url}
                alt=""
                className="w-52 h-52 object-cover rounded-md"
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Image:
                  </span> 
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
                <span className="label-text">Category</span>
              </label>
              <select
                className="select w-full"
                {...register("category", { required: true })}
                defaultValue={category}
              >
                <option>Bronze</option>
                <option>Silver</option>
                <option>Golden</option>
                <option>Dimond</option>
              </select>
            </div>
            <div className="form-control flex-row gap-20 mt-5 items-center">
              <div>
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <div className="flex gap-5 relative -top-2">
                  <label
                    htmlFor="active-field"
                    className="label cursor-pointer"
                  >
                    <div className="flex items-center gap-1">
                      <input
                        {...register("status", { required: true })}
                        id="active-field"
                        type="radio"
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
              <div className="flex flex-col gap-2">
                {allItems.length ? (
                  <span className="text-sm text-info relative -bottom-1">{` ${items.length} Items Selected (${totalPrice}tk)`}</span>
                ) : null}
                <label
                  htmlFor="my-modal"
                  className="btn btn-wide"
                  onClick={setValue}
                >
                  {allItems.length ? `ReSelect!` : "Select Item"}
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
            <div className="form-control mx-auto mt-6">
              <button
                type="submit"
                className="btn btn-wide mx-auto btn-primary"
              >
                Update Package
              </button>
            </div>
          </form>
        </div>
      </div>
      <UpdatePackageItem
        items={items}
        setItems={setItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}

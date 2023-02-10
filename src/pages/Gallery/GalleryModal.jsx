import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useCreateGalleryPhotoMutation } from "../../features/gallery/galleryAPI";
import { getToken } from "../../utils/token";

export default function GalleryModal({ galleryModal, setGalleryModal }) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = getToken();
  const imgStorage_key = "b20e07a3b33d3ccbb413087c3d9d148d";

  const [createGalleryPicture, { isSuccess, isError }] =
    useCreateGalleryPhotoMutation();

  const handleCreateGallery = async (galleryData) => {
    const imageData = galleryData?.imgURL[0];
    const formData = new FormData();
    formData.append("image", imageData);
    const URL = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
    const { data } = await axios.post(URL, formData);
    if (data.success) {
      galleryData = {
        ...galleryData,
        imgURL: data.data.url,
      };

      createGalleryPicture({ token, data: galleryData });
      setTimeout(() => {
        setGalleryModal(false);
      }, 1500);
      
    } else {
      toast.error("ImageBB server is down. Try later");
    }

    reset();
  };

  useEffect(() => {
    if (isSuccess)
      toast.success("Gallery Image added successfully", { id: "succ" });
    if (isError) toast.error("Internal Server Error", { id: "err" });
  }, [isSuccess, isError]);

  return (
    <div>
      {galleryModal && (
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal modal-open">
            <div className="modal-box">
              <label
                onClick={() => setGalleryModal(false)}
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form onSubmit={handleSubmit(handleCreateGallery)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Wedding Event"
                    className="input input-bordered"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span className="text-error text-xs text-left mt-1">
                      Title is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="file"
                    {...register("imgURL", { required: true })}
                    className="file-input w-full input-bordered"
                  />
                  {errors.imgURL && (
                    <span className="text-error text-xs text-left mt-1">
                      Image is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Wedding Event"
                    className="input input-bordered"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <span className="text-error text-xs text-left mt-1">
                      Date is required
                    </span>
                  )}
                </div>

                <button className="btn btn-wide block mx-auto mt-4">
                  Save
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

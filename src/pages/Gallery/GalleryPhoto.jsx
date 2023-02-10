import React from "react";
import {  BsFillTrashFill, /* BsPencilFill */ } from "react-icons/bs";
import { useDeleteGalleryPhotoMutation } from "../../features/gallery/galleryAPI";
import { getToken } from "../../utils/token";

export default function GalleryPhoto({ gallery: { title, date, imgURL, _id } }) {

  const token = getToken()
  const [deleteImage] = useDeleteGalleryPhotoMutation()
  const handleDelete = () => deleteImage({ token, id: _id })
  
  return (
    <div className="photo">
      <div className="border_ top"></div>
      <div className="border_ bottom"></div>
      <div className="border_ left"></div>
      <div className="border_ right"></div>
      <img src={imgURL} alt="" />
      <div className="photo_content">
        <div className="flex gap-1">
          <BsFillTrashFill onClick={handleDelete} className="text-4xl border border-red-400 cursor-pointer hover:bg-red-400 rounded-full p-1" />
          {/* <BsPencilFill className="text-4xl border border-red-400 cursor-pointer hover:bg-red-400 rounded-full p-1" /> */}
        </div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <h4 className="font-light">{date}</h4>
      </div>
    </div>
  );
}

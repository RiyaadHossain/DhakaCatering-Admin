import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { BsPlusCircleFill } from "react-icons/bs";
import GalleryPhoto from "./GalleryPhoto";
import GalleryModal from "./GalleryModal";
import { useGetGalleryQuery } from "../../features/gallery/galleryAPI";
import { getToken } from "../../utils/token";
import Loading from "../../components/Loading";

export default function Gallery() {
  const token = getToken();
  const [galleryModal, setGalleryModal] = useState(false);
  const { data, isLoading } = useGetGalleryQuery(token);

  const button = (
    <button
      onClick={() => setGalleryModal(true)}
      className="btn btn-success btn-sm"
    >
      <BsPlusCircleFill className="mr-1" />
      Add New
    </button>
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <PageHeader
        title="Gallery"
        button={button}
        quantity={data.gallery.length.toString()}
      />
      <div className="gallery">
        {data.gallery.length ? (
          data.gallery.map((gallery, i) => (
            <GalleryPhoto key={i} gallery={gallery} />
          ))
        ) : (
          <div className="text-xl mt-32">
            No Gallery Image is added yet
            <div className="text-center mt-2">{button}</div>
          </div>
        )}
      </div>
      <GalleryModal
        galleryModal={galleryModal}
        setGalleryModal={setGalleryModal}
      />
    </div>
  );
}

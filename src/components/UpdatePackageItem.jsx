import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetItemsQuery } from "../features/item/itemAPI";
import Loading from "./Loading";

export default function UpdatePackageItem({
  items,
  setItems,
  totalPrice,
  setTotalPrice,
}) {
  const navigate = useNavigate();
  const { data, isFetching, isError } = useGetItemsQuery();

  if (isFetching) return <Loading />;
  if (isError) navigate("/packages");

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);
    if (checked) {
      items = [...items, value];
      setItems(items);
    } else {
      items = items.filter((item) => item._id !== value.id);
      setItems(items);
    }

    totalPrice = 0;

    items.forEach((item) => {
      setTotalPrice((totalPrice += item.price));
    });
  };
console.log(items);
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal"
            className="btn btn-error btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-xl mb-2">
            Select the Items for this package
          </h3>
          <div className="py-4">
            <div className=" grid grid-cols-3 gap-x-2">
              {data.data.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center"
                  onChange={(e) => handleCheck(e)}
                >
                  <label className="cursor-pointer label gap-2">
                    <input
                      value={JSON.stringify({
                        id: item._id,
                        price: item.price,
                      })}
                      type="checkbox"
                      defaultChecked={items.map(e => e._id === item._id)}
                      className="checkbox checkbox-sm"
                    />
                    <span className="label-text">
                      {item.name} ({item.price}৳)
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-6 ml-2">
              <h5 className="font-semibold">
                {" "}
                Total Item: {items.length ? totalPrice : 0}৳
              </h5>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-wide mx-auto btn-success"
            >
              Select!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

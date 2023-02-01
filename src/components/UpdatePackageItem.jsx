import React from "react";
import UpdateSelectedItems from "../pages/Package/AllPackages/UpdateSelectedItems";
import UpdateUnselectedItems from "../pages/Package/AllPackages/UpdateUnselectedItems";

export default function UpdatePackageItem({
  items,
  setItems,
  totalPrice,
  setTotalPrice,
}) {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  w-11/12 max-w-3xl">
          <label
            htmlFor="my-modal"
            className="btn btn-error btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-center text-2xl mb-2">
            Select the Items for this package
          </h3>
          <div className="py-4">
            {/* ________ Selected Items ________ */}
            <UpdateSelectedItems
              items={items}
              setItems={setItems}
              setTotalPrice={setTotalPrice}
            />
            {/* ________ Selected Items ________ */}

            {/* ________ Unselected Items ________ */}
            <UpdateUnselectedItems
              selItems={items}
              setSelItems={setItems}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
            {/* ________ Unselected Items ________ */}

            <div className="mt-6 ml-2">
              <h5 className="font-semibold">
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

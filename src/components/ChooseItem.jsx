import React from "react";
import SelectedItems from "../pages/Package/AllPackages/SelectedItems";
import UnselectedItems from "../pages/Package/AllPackages/UnselectedItems";

export default function ChooseItem({
  items,
  setItems,
  totalPrice,
  setTotalPrice,
}) {

  const resetItems = () => {
    setItems([]);
    setTotalPrice(0);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  w-11/12 max-w-3xl">
          <h3 className="font-bold text-center text-xl mb-2">
            Select the Items for this package
          </h3>
          <div className="py-4">
            <div className="mt-4 flex justify-between items-center mb-2">
              <h5 className="font-semibold">
                Total Item: {items.length ? totalPrice : 0}৳
              </h5>
              <p className="btn btn-sm btn-circle">{items.length}</p>
            </div>
            {/* ------------------ Selected Item Table ------------------ */}
            <SelectedItems
              selItems={items}
              setSelItems={setItems}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
            {/* ------------------ Selected Item Table ^ ------------------ */}

            {/* ------------------ Unselected Item Table ------------------ */}
            <UnselectedItems
              selItems={items}
              setSelItems={setItems}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
            {/* ------------------ Unselected Item Table ^ ------------------ */}
          </div>
          <div className="modal-action flex flex-wrap gap-3">
            <label  onClick={resetItems} htmlFor="my-modal" className="btn btn-sm btn-error">
              Cancel
            </label>
            <label htmlFor="my-modal" className="btn btn-sm btn-success">
              Select!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className=" grid grid-cols-3 gap-x-2">
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
                      className="checkbox checkbox-sm"
                    />
                    <span className="label-text">
                      {item.name} ({item.price}৳)
                    </span>
                  </label>
                </div>
              ))}
            </div> */

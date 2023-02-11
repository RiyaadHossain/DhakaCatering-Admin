import React, { useState } from "react";
import Loading from "../../../components/Loading";
import { useGetItemsQuery } from "../../../features/item/itemAPI";

export default function UnselectedItems({
  totalPrice,
  setTotalPrice,
  selItems,
  setSelItems,
}) {
  const [category, setCategory] = useState("");
  const { data, isFetching } = useGetItemsQuery();
  if (isFetching) return <Loading />;

  let items = data.data.filter((item) => item.status === "active");

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);
    value = { ...value, totalPrice: value.price };
    if (checked) {
      selItems = [...selItems, value];
      setSelItems(selItems);
    } else {
      selItems = selItems.filter((item) => item._id !== value._id);
      setSelItems(selItems);
    }

    totalPrice = 0;
    selItems.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    setTotalPrice(totalPrice);
  };

  const itemsId = selItems.map((item) => item._id);
  const unselectedItems = items.filter((item) => !itemsId.includes(item._id));
  let filteredItems = unselectedItems;
  if (category) {
    filteredItems = unselectedItems.filter(
      (item) => item.category === category
    );
  }
  if (category === "All" || category === "default") {
    filteredItems = unselectedItems;
  }

  return (
    <>
      <div className="flex items-center justify-between mt-8 mb-3">
        <p className="font-semibold">Select More Items -</p>
        <select
          defaultValue="default"
          onClick={(e) => setCategory(e.target.value)}
          className="select w-full max-w-[250px] input-bordered bg-slate-700"
        >
          <option disabled value="default">
            Select Category
          </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full border rounded-t-lg">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/*  row  */}
            {filteredItems.map((item) => (
              <tr key={item._id}>
                <th>
                  <label onClick={(e) => handleCheck(e)}>
                    <input
                      value={JSON.stringify({ ...item, qty: 1 })}
                      type="checkbox"
                      className="checkbox checkbox-sm"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image.url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="badge badge-sm">{item.category}</div>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import React from "react";
import Loading from "../../../components/Loading";
import { useGetItemsQuery } from "../../../features/item/itemAPI";

export default function UpdateUnselectedItems({
  totalPrice,
  setTotalPrice,
  selItems,
  setSelItems,
}) {
  const { data, isFetching } = useGetItemsQuery();
  if (isFetching) return <Loading />;

  let items = data.data.filter((item) => item.status === "active");

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);
    value = { ...value, totalPrice: value.id.price };
    if (checked) {
      selItems = [...selItems, value];
      setSelItems(selItems);
    } else {
      selItems = selItems.filter((item) => item.id._id !== value.id._id);
      setSelItems(selItems);
    }

    totalPrice = 0;
    selItems.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    setTotalPrice(totalPrice);
  };

  const itemsId = selItems.map((item) => item.id._id);
  const unselectedItems = items.filter((item) => !itemsId.includes(item._id));

  return (
    <>
      <p className="font-semibold mb-2 mt-10">Select More Items -</p>
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
            {unselectedItems.map((item) => (
              <tr key={item._id}>{console.log(item)}
                <th>
                  <label onClick={(e) => handleCheck(e)}>
                    <input
                      value={JSON.stringify({
                        id: { ...item },
                        qty: 1,
                      })}
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

import React from "react";

export default function UpdateSelectedItems({
  items,
  setItems,
  setTotalPrice,
}) {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    setTotalPrice(totalPrice);
    return totalPrice;
  };

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);

    if (checked) {
      items = [...items, value];
      setItems(items);
    } else {
      items = items.filter((item) => item.id._id !== value.id._id);
      setItems(items);
    }

    calculateTotalPrice();
  };

  const increase = (id) => {
    let selectedItem = items.find((item) => item.id._id === id);
    let restItems = items.filter((item) => item.id._id !== id);
    const selectedItemCopy = { ...selectedItem };
    selectedItemCopy.qty = selectedItemCopy.qty + 1;
    selectedItemCopy.totalPrice =
      selectedItemCopy.id.price * selectedItemCopy.qty;

    setItems([...restItems, selectedItemCopy]);

    calculateTotalPrice();
  };

  const decrease = (id) => {
    const selectedItem = items.find((item) => item.id._id === id);
    const restItems = items.filter((item) => item.id._id !== id);
    const selectedItemCopy = { ...selectedItem };
    if (selectedItemCopy.qty > 1) {
      selectedItemCopy.qty = selectedItemCopy.qty - 1;
    }

    selectedItemCopy.totalPrice = selectedItemCopy.id.price * selectedItemCopy.qty;
    setItems([...restItems, selectedItemCopy]);

    calculateTotalPrice();
  };

  items = [...items]
  items = items.sort((a, b) => a.totalPrice - b.totalPrice);
  console.log(items)
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full border rounded-t-lg">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/*  row  */}
          {items.map((item) => (
            <tr key={item.id._id}>
              <th>
                <label onClick={(e) => handleCheck(e)}>
                  <input
                    defaultChecked
                    value={JSON.stringify(item)}
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
                        src={item.id.image.url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.id.name}</div>
                    <div className="badge badge-sm">{item.id.category}</div>
                  </div>
                </div>
              </td>
              <td>{item.qty}</td>
              <td>{item.totalPrice}</td>
              <th className="grid gap-1">
                <button
                  onClick={() => increase(item.id._id)}
                  className="btn btn-xs w-8 btn-success"
                >
                  +
                </button>
                <button
                  onClick={() => decrease(item.id._id)}
                  className="btn btn-xs w-8 btn-error"
                >
                  -
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

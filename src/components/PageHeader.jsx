import React from "react";

export default function PageHeader({ title, quantity, button }) {

  if (quantity || quantity >= 0) {
    quantity = quantity.toString()
  }
    
  return (
    <div
      className={`mt-5 mb-5 flex justify-between items-end ${
        button ? "center" : "end"
      }`}
    >
      <div>
        <span className="table-subtitle">Page</span>
        <h3 className="table-title flex items-center gap-3">
          {title} :{" "}
          {button && quantity && (
            <span className=" bg-slate-700 text-white btn w-6 rounded-full btn-xs h-6">
              {button && quantity}
            </span>
          )}
        </h3>
      </div>
      {(quantity && !button) && (
        <div className="btn w-9 h-9 md:w-12 md:h-12 rounded-full btn-sm sm:btn-md">
          {quantity}
        </div>
      )}
      {(quantity !== '0' && button) && button}
    </div>
  );
}

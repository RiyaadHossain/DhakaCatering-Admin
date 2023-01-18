import React from "react";

export default function Radio() {
  return (
    <div className="flex gap-5 relative -top-2">
      <label className="label cursor-pointer">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            checked
          />
          <span className="label-text font-semibold text-xs">Active</span>
        </div>
      </label>
      <label className="label cursor-pointer">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
          <span className="label-text font-semibold text-xs">Unavailable</span>
        </div>
      </label>
    </div>
  );
}

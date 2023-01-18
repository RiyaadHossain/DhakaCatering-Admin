import React from "react";

export default function ReviewCard() {
  return (
    <div className="mb-6">
      <div className="flex justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg mb-1">Kazi Z Hossain</h3>
          <p className="font-light max-w-[650px]">
            Food is one of the basic necessities of life. Food contains
            nutrients—substances essential for the growth, repair and for the regulation of vital
            processes. Nutrients provide the energy our bodies need to function.
          </p>
        </div>
        <button className="btn btn-error btn-xs md:btn-sm mt-2 md:mt-9">Delete</button>
      </div>
    </div>
  );
}

import React from "react";

export default function Adventure({ children }) {
  return (
    <div className="flex h-[90vh]">
      <div className="m-auto bg-slate-50 rounded-md max-w-4xl h-5/6 grid md:grid-cols-2">
        <div className={"imgStyle"}>
          <div className={"cartoonImg"}></div>
          <div className={"cloud_one"}></div>
          <div className={"cloud_two"}></div>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <div className="text-center px-16">{children}</div>
        </div>
      </div>
    </div>
  );
}

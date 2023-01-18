import React, { useState } from "react";
import Details from "./Details";
import Reviews from "./Reviews";

export default function Navigation() {
  const [act, setAct] = useState("details");

  return (
    <>
      <div className="btm-nav relative mt-12 gap-2 max-w-lg">
        <button
          onClick={() => setAct("details")}
          className={`bg-slate-300 ${act.includes("details") && "active"}`}
        >
          Details
        </button>
        <button
          onClick={() => setAct("reviews")}
          className={`bg-slate-300 ${act.includes("reviews") && "active"}`}
        >
          Reviews (5)
        </button>
      </div>
      <div className="mt-8">
        {act.includes("details") ? <Details /> : <Reviews />}
      </div>
    </>
  );
}

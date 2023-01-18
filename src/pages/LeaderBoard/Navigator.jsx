import React, { useState } from "react";
import TopFood from "./TopFood";
import TopUser from "./TopUser";

export default function Navigator() {
  const [act, setAct] = useState("user");

  return (
    <>
      <div className="btm-nav relative mt-12 gap-2 max-w-2xl">
        <button
          onClick={() => setAct("user")}
          className={`bg-slate-200 ${act.includes("user") && "active"}`}
        >
          Top User
        </button>
        <button
          onClick={() => setAct("item")}
          className={`bg-slate-200 ${act.includes("item") && "active"}`}
        >
          Top Item
        </button>
      </div>
      <div className="mt-8">
        {act.includes("user") ? <TopUser /> : <TopFood />}
      </div>
    </>
  );
}

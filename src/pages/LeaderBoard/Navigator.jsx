import React, { useState } from "react";
import Loading from "../../components/Loading";
import { useLeaderboradDataQuery } from "../../features/package/packageAPI";
import { getToken } from "../../utils/token";
import TopFood from "./TopFood";
import TopUser from "./TopUser";

export default function Navigator() {
  const [act, setAct] = useState("user");

  const token = getToken();
  const { data, isFetching } = useLeaderboradDataQuery(token);
  if (isFetching) return <Loading />;

  const { packages, users } = data?.data;

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
        {act.includes("user") ? (
          <TopUser users={users} />
        ) : (
          <TopFood packages={packages} />
        )}
      </div>
    </>
  );
}

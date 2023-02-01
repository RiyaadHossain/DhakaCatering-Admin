import React, { useState } from "react";
import Loading from "../../../components/Loading";
import { useGetReviewsQuery } from "../../../features/review/reviewAPI";
import Details from "./Details";
import Reviews from "./Reviews";

export default function Navigation({ foodId, description }) {
  const [act, setAct] = useState("details");
  const { data, isFetching } = useGetReviewsQuery(foodId);

  if (isFetching) return <Loading />;

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
          Reviews ({data.reviews.length})
        </button>
      </div>
      <div className="mt-8">
        {act.includes("details") ? (
          <Details  description={description} />
        ) : (
          <Reviews reviews={data.reviews} />
        )}
      </div>
    </>
  );
}

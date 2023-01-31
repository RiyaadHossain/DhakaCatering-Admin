import React from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRemoveReviewMutation } from "../features/review/reviewAPI";
import { getToken } from "../utils/token";
import Loading from "./Loading";

export default function ReviewCard({ review }) {
  const token = getToken();
  const [removeReview, { isSuccess, isLoading }] = useRemoveReviewMutation();

  useEffect(() => {
    if (isSuccess) toast.success("Review Deleted Successfully", { id: "succ" });
  }, [isSuccess]);
  
  if (isLoading) return <Loading />;

  return (
    <div className="mb-6">
      <div className="flex justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg mb-1">{review.name}</h3>
          <p className="font-light max-w-[650px]">{review.review}</p>
        </div>
        <button
          onClick={() => removeReview({ token, id: review._id })}
          className="btn btn-error btn-xs md:btn-sm mt-2 md:mt-9"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

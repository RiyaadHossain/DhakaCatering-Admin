import React from "react";
import ReviewCard from "../../../components/ReviewCard";

export default function Reviews({ reviews }) {
  return (
    <div>
      <div className="mt-12">
        {reviews.length ? (
          reviews.map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))
        ) : (
          <div className="text-lg font-semibold">No Review Yet!</div>
        )}
      </div>
    </div>
  );
}

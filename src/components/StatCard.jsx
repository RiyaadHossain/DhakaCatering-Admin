import React from "react";

export default function StatCard({ icon, title, quantity, color }) {
  return (
    <div className="card w-60">
      <div className={`card-body items-center text-center rounded-md shadow-lg ${color}`}>
        {icon}
        <p className="card-title text-4xl">{quantity}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

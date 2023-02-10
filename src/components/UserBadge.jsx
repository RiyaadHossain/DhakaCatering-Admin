import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

export default function UserBadge() {
  return (
    <div className="flex justify-end">
      <HiBadgeCheck className="text-5xl text-green-600 bg-slate-300 hover:bg-slate-500 p-1 rounded-full" />
    </div>
  );
}

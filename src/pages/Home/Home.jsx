import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { IoFastFoodSharp } from "react-icons/io5";
import MonthlySales from "../../charts/MonthlySales";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import StatCard from "../../components/StatCard";
import TopFoodStat from "../../components/TopFoodStat";
import TopUserStat from "../../components/TopUserStat";
import { statData } from "../../data/statData";
import { useLeaderboradDataQuery } from "../../features/package/packageAPI";
import { getToken } from "../../utils/token";

export default function Home() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useLeaderboradDataQuery(token);
  if (isFetching) return <Loading />;

  const { packages, users } = data?.data;

  const thanks = () => {
    toast.success("Never lose hope. Allah is always with us.", {
      id: "Allah",
      style: { maxWidth: "400px" },
    });
  };

  return (
    <div>
      {/*  <div className="text-2xl font-bold text-center flex items-center gap-3 justify-center">
        <IoFastFoodSharp />
        Dhaka Catering
      </div> */}
      <Navbar />

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-24">
        {statData.map(({ icon, color, quantity, title }, i) => (
          <StatCard
            icon={icon}
            title={title}
            quantity={quantity}
            color={color}
          />
        ))}
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:bg-base-200 py-14 rounded-md lg:gap-14">
        <div className="card w-96 bg-base-200 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bismillah</h2>
            <p>
              Today is a new day. Start it in the name of Allah. He'll solve all
              your barriers. 🌸
            </p>
            <div className="card-actions justify-start">
              <button onClick={thanks} className="btn btn-sm btn-primary">
                Thanks!
              </button>
            </div>
          </div>
        </div>
        <div>
          <MonthlySales />
          <p className="text-center mt-3 font-semibold text-lg">
            Monthly Sales Growth
          </p>
        </div>
      </div>
      <div className="flex items-center w-full flex-wrap gap-8 mt-10">
        <div className="flex-1">
          <TopUserStat users={users} />
        </div>
        <div className="flex-1">
          <TopFoodStat packages={packages} />
        </div>
      </div>
      <div className="mt-5 text-center">
        <button
          onClick={() => navigate("/leaderboard")}
          className="btn btn-wide"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
}

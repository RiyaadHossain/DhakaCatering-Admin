import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { IoFastFoodSharp } from "react-icons/io5";
import MonthlySales from "../../charts/MonthlySales";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import TopFoodStat from "../../components/TopFoodStat";
import TopUserStat from "../../components/TopUserStat";
import { useLeaderboradDataQuery } from "../../features/package/packageAPI";
import { useGetStatDataQuery } from "../../features/statData/statDataAPI";
import { getToken } from "../../utils/token";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import { HiCurrencyBangladeshi, HiUsers } from "react-icons/hi";
import { useUserPersistencyQuery } from "../../features/auth/authAPI";

export default function Home() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useLeaderboradDataQuery(token);
  const { data: user, isFetching: userFetching } =
    useUserPersistencyQuery(token);
  const { data: statDataF, isFetching: statFetching } =
    useGetStatDataQuery(token);
  if (isFetching || statFetching || userFetching) return <Loading />;

  const { packages, users } = data?.data;
  const { userStat, packageStat, itemStat, saleStat } = statDataF?.data;

  const thanks = () => {
    toast.success("Never lose hope. Allah is always with us.", {
      id: "Allah",
      style: { maxWidth: "400px" },
    });
  };

  return (
    <div>
      <Navbar user={user.data} />

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-24">
        <div className="card w-60 text-slate-700">
          <div className="card-body items-center text-center rounded-md shadow-lg bg-sky-300">
            <HiCurrencyBangladeshi className="text-3xl" />
            <p className="card-title text-4xl">{saleStat}</p>
            <h2>Total Sales</h2>
          </div>
        </div>
        <div className="card w-60 text-slate-700">
          <div className="card-body items-center text-center rounded-md shadow-lg bg-orange-300">
            <IoFastFoodSharp className="text-3xl" />
            <p className="card-title text-4xl">{packageStat}</p>
            <h2>Packages</h2>
          </div>
        </div>
        <div className="card w-60 text-slate-700">
          <div className="card-body items-center text-center rounded-md shadow-lg bg-green-300">
            <FaHamburger className="text-3xl" />
            <p className="card-title text-4xl">{itemStat}</p>
            <h2>Items</h2>
          </div>
        </div>
        <div className="card w-60 text-slate-700">
          <div className="card-body items-center text-center rounded-md shadow-lg bg-rose-300">
            <HiUsers className="text-3xl" />
            <p className="card-title text-4xl">{userStat}</p>
            <h2>Customer</h2>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:bg-base-200 py-14 rounded-md lg:gap-14">
        <div className="card w-96 bg-base-200 shadow-xl image-full">
          <figure>
            <img src="https://images.unsplash.com/photo-1590075865003-e48277faa558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=400&q=80" alt="Islam" />
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

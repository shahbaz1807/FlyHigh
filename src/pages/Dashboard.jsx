import React from 'react'
import FinanceCards from "../components/dashboard/FinanceCards";
import BalanceChart from '../components/dashboard/BalanceChart';
import DistributionChart from '../components/dashboard/DistributionChart';
import { AiFillEdit } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa6";


const Dashboard = () => {
  return (
    <div>
      <h1 className="font-worksans text-2xl sm:text-5xl font-medium text-primary">
        Dashboard
      </h1>
      <p className="text-zinc-400 text-sm sm:text-base">
        With all of the styling tool options available in today’s market
      </p>
      <FinanceCards />
      <div className="mt-10 grid max-w-full md:grid-cols-[60%_1fr]  gap-12 overflow-hidden">
        {/* Left Content (70%) */}
        <div>
          <BalanceChart />
        </div>

        {/* Right Content (30%) */}
        <div>
          <DistributionChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
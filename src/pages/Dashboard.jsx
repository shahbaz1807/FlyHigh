import React from 'react'
import FinanceCards from "../components/dashboard/FinanceCards";
import BalanceChart from '../components/dashboard/BalanceChart';
import DistributionChart from '../components/dashboard/DistributionChart';
import { AiFillEdit } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa6";


const Dashboard = () => {
  return (
    <div>
      <h1 className="font-worksans text-5xl font-medium text-primary">
        Dashboard
      </h1>
      <p className="text-zinc-400">
        With all of the styling tool options available in today’s market
      </p>
      <FinanceCards />
      <div className="mt-10 grid max-w-full grid-cols-[60%_1fr] gap-12 overflow-hidden">
        {/* Left Content (70%) */}
        <div>
          <BalanceChart />
        </div>

        {/* Right Content (30%) */}
        <div>
          <DistributionChart />
        </div>
      </div>
      <div className="w-[1000px] mt-10">
        <div
          className="w-full max-w-lg overflow-hidden rounded-xl transition-all duration-300"
        >
          <div className="relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-90"></div>

            {/* Backdrop blur layer */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

            {/* Dashed border */}
            <div className="pointer-events-none absolute inset-0 m-1 rounded-xl border-2 border-dashed border-white/40"></div>

            {/* Content container */}
            <div className="relative z-10 p-6">
              {/* Header */}
              <div className="pb-2">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-800">
                  How To Learn Web Development
                </h2>
                <div className="mt-2 h-px w-full bg-zinc-700/20"></div>
              </div>

              {/* Content */}
              <div className="py-3">
                <p className="leading-relaxed text-zinc-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus itaque ab vel a blanditiis excepturi, corporis
                  accusantium obcaecati rerum rem cumque natus. Ipsam cum itaque
                  ab tenetur incidunt. Ab, molestiae?
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-zinc-800">
                  <FaRegCalendarCheck className="h-4 w-4" />
                  <span className="text-sm font-medium">23 Dec, 2005</span>
                </div>

                <button
                  className={`rounded-full bg-zinc-800 p-3 text-white transition-all duration-300 hover:bg-zinc-700`}
                >
                  <AiFillEdit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
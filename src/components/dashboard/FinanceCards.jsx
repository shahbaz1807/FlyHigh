import React from 'react'
import { MdOutlineOpenInNew } from "react-icons/md";

const FinanceCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 sm:gap-5 gap-y-2">
      <div className="mt-4 flex flex-col-reverse md:flex-row w-full items-start md:items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] md:px-6  px-4 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-base sm:text-xl text-white mt-2">
            Networth
          </h4>
          <div className="flex items-end gap-3 md:gap-5 text-left">
            <h1 className="md:mt-[5px] font-k2d sm:text-5xl text-[33px] text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-base md:text-lg text-green-400 mb-2 md:mb-0">+50%</h4>
          </div>
        </div>
        <div className="flex sm:h-12 sm:w-12 w-9 h-9 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
      <div className="mt-4 flex flex-col-reverse md:flex-row w-full items-start md:items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] md:px-6  px-4 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-base sm:text-xl text-white mt-2">
            Networth
          </h4>
          <div className="flex items-end gap-3 md:gap-5 text-left">
            <h1 className="md:mt-[5px] font-k2d sm:text-5xl text-[33px] text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-base md:text-lg text-green-400 mb-2 md:mb-0">+50%</h4>
          </div>
        </div>
        <div className="flex sm:h-12 sm:w-12 w-9 h-9 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
      <div className="mt-4 flex flex-col-reverse md:flex-row w-full items-start md:items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] md:px-6  px-4 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-base sm:text-xl text-white mt-2">
            Networth
          </h4>
          <div className="flex items-end gap-3 md:gap-5 text-left">
            <h1 className="md:mt-[5px] font-k2d sm:text-5xl text-[33px] text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-base md:text-lg text-green-400 mb-2 md:mb-0">+50%</h4>
          </div>
        </div>
        <div className="flex sm:h-12 sm:w-12 w-9 h-9 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
      <div className="mt-4 flex flex-col-reverse md:flex-row w-full items-start md:items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] md:px-6  px-4 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-base sm:text-xl text-white mt-2">
            Networth
          </h4>
          <div className="flex items-end gap-3 md:gap-5 text-left">
            <h1 className="md:mt-[5px] font-k2d sm:text-5xl text-[33px] text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-base md:text-lg text-green-400 mb-2 md:mb-0">+50%</h4>
          </div>
        </div>
        <div className="flex sm:h-12 sm:w-12 w-9 h-9 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>

    </div>
  );
};

export default FinanceCards;
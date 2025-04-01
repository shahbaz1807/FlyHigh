import React from 'react'
import { MdOutlineOpenInNew } from "react-icons/md";

const FinanceCards = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="mt-4 flex w-full items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] px-6 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-xl text-white">
            Networth
          </h4>
          <div className="flex items-end gap-4">
            <h1 className="mt-[5px] font-k2d text-5xl text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-lg text-green-400">+50%</h4>
          </div>
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] px-6 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-xl text-white">
            Networth
          </h4>
          <div className="flex items-end gap-4">
            <h1 className="mt-[5px] font-k2d text-5xl text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-lg text-green-400">+50%</h4>
          </div>
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] px-6 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-xl text-white">
            Networth
          </h4>
          <div className="flex items-end gap-4">
            <h1 className="mt-[5px] font-k2d text-5xl text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-lg text-green-400">+50%</h4>
          </div>
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between rounded-xl border border-[#bdbdbd31] bg-[#2e2e2e] px-6 py-4">
        <div>
          <h4 className="fw-bolder font-worksans text-xl text-white">
            Networth
          </h4>
          <div className="flex items-end gap-4">
            <h1 className="mt-[5px] font-k2d text-5xl text-primary">35M</h1>
            <h4 className="fw-bolder font-k2d text-lg text-green-400">+50%</h4>
          </div>
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-zinc-600 px-[6px] py-[6px] text-white">
          <img src="/icons/chart.svg" width={20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FinanceCards;
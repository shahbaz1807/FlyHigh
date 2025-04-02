import React from "react";
import Chart from "react-apexcharts";

const DistributionChart = () => {
  const options = {
    chart: {
      type: "pie",
      width: "100%",
    },
    colors: ["#4FD1C5", "#724fd1", "#4fd165", "#d14f4f"],
    labels: ["Earning", "Savings", "Expense", "Investments"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "#ffffff",
      },
    },
    dataLabels: {
      style: {
        fontSize: "15px",
        fontFamily: "Work Sans",
        fontWeight: "500",
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.2,
      },
      formatter: (val) => `${val.toFixed(1)}%`,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -20, // Move percentage text inward
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "280px", // Set the chart width for small screens
            margin: "auto", // Center the chart horizontally
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
            labels: {
              colors: "#ffffff",
            },
          },
        },
      },
    ],
  };

  const series = [1450, 1550, 900, 1900];

  return (
    <div className="h-auto max-w-full rounded-2xl border border-[#bdbdbd31] bg-[#2e2e2e] px-4 py-5 sm:px-7 sm:py-7">
      <div className="mb-9">
        <h1 className="font-worksans text-2xl text-primary sm:text-4xl">
          Balance Distribute
        </h1>
        <p className="mt-1 text-sm text-zinc-500 sm:text-base">
          Quick overview of balance distribution for better financial
          management.
        </p>
      </div>
      <div className="flex w-full justify-center">
        <Chart options={options} series={series} type="pie" height={300} />
      </div>
    </div>
  );
};

export default DistributionChart;

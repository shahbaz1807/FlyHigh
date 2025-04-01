import React from "react";
import Chart from "react-apexcharts";

const DistributionChart = () => {
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    colors: ["#4FD1C5", "#724fd1", "#4fd165", "#d14f4f"],
    labels: ["Earning", "Savings", "Expence", "Invesments"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "#ffffff",
      },
    },
    dataLabels: {
      style: {
        fontSize: "18px",
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
            width: 200,
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


  const series = [1450 , 1550, 900 , 1900];
  return (
    <div className="h-auto rounded-2xl border border-[#bdbdbd31] bg-[#2e2e2e] px-7 py-7">
      <div className="mb-9">
        <h1 className="font-worksans text-4xl text-primary">
          Balance Distribution
        </h1>
        <p className="mt-2 text-zinc-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="h-[380px]">
        <Chart options={options} series={series} type="pie" />
      </div>
    </div>
  );
};

export default DistributionChart;

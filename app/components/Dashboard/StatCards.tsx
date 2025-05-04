import React, { FC } from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const StatCards = () => {
  return (
    <>
      <Cards
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Cards
        title="Avg Order"
        value="$27.97"
        pillText="1.05%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Cards
        title="Trailing Year"
        value="$278,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

interface cardProps {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}
const Cards: FC<cardProps> = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-4 border-stone-300 rounded border col-span-4 ">
      <div className="flex mb-8 items-start justify-between">
        <div className="overflow-hidden">
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-semibold overflow-hidden text-ellipsis">
            {value}
          </p>
        </div>
        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend == "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend == "up" ? <FiTrendingDown /> : <FiTrendingUp />}
          {pillText}
        </span>
      </div>
      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};
export default StatCards;

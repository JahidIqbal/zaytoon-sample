import React from "react";
import Value from "./Value";

interface Props {
  title: string;
  value: number;
  prefix?: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

function StatCard({ title, value, prefix, icon, bgColor, textColor }: Props) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col items-center ${bgColor}`}
    >
      <div className={`text-4xl mb-4 ${textColor}`}>{icon}</div>
      <h3 className="text-sm 2xl:text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className={`text-2xl font-bold ${textColor}`}>
        {prefix}
        <Value value={value} />
      </p>
    </div>
  );
}

export default StatCard;

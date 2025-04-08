import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between items-center ml-4 mr-6 mt-6">
        <div className="flex flex-col">
          {/* <div className="h-6 bg-gray-300 dark:bg-gray-400 rounded w-32"></div> */}
          <div className="h-6 bg-gray-300  rounded w-48 mt-2"></div>
        </div>
        <div className="h-10 bg-gray-300 rounded w-24"></div>
      </div>
      <div className="bg-[#FFFFFF] m-6 rounded-xl p-6 text-[#3F4254] ">
        <div className="h-8 bg-gray-300  rounded w-48 mb-6"></div>
        {/* <div className="w-full dark:bg-gray-400 h-1 mb-6"></div> */}
        <div className="flex justify-between mt-6 mb-4">
          {/* <div className="h-10 bg-gray-300 dark:bg-gray-400 rounded w-32"></div> */}
          {/* <div className="h-10 bg-gray-300 dark:bg-gray-400 rounded w-48"></div> */}
        </div>
        {/* <div className="w-full dark:bg-gray-400 h-1 mb-6"></div> */}
        <table className="min-w-full divide-y divide-gray-200 poppins">
          <thead>
            <tr>
              {["Email", "Status", ""].map(
                (header, index) => (
                  <th
                    key={index}
                    className="text-left py-2"
                  >
                    <div className="h-6 bg-gray-300 rounded w-24"></div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array(2)
              .fill("")
              .map((_, index) => (
                <tr key={index}>
                  <td className="py-3">
                    <div className="h-6 bg-gray-300 rounded w-48"></div>
                  </td>
                  <td className="py-3">
                    <div className="h-6 bg-gray-300 rounded w-36"></div>
                  </td>
                  <td className="py-3 flex gap-3">
                    <div className="h-6 bg-gray-300 rounded w-12"></div>
                    <div className="h-6 bg-gray-300 rounded w-12"></div>
                    {/* <div className="h-6 bg-gray-300 dark:bg-gray-400 rounded w-12"></div> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-5">
          <div className="h-6 bg-gray-300 rounded w-32"></div>
          <div className="h-6 bg-gray-300 rounded w-48"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

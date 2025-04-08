import React from "react";
import ReportPoysa from "../ReportPoysa";
import { DebitCredit } from "../../Types";
import NoDataRow from "../NoDataRow";

interface Props {
  fistColumnTitle: string;
  data: DebitCredit[];
}

function DebitCreditTable({ fistColumnTitle, data }: Props) {
  const totalDebit = data.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = data.reduce((sum, item) => sum + item.credit, 0);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm bg-white">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">{fistColumnTitle}</th>
            <th className="px-4 py-2 border">Debit</th>
            <th className="px-4 py-2 border">Credit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 border">{item.name}</td>
              <td className="px-4 py-2 border">
                <ReportPoysa value={item.debit} />
              </td>
              <td className="px-4 py-2 border">
                <ReportPoysa value={item.credit} />
              </td>
            </tr>
          ))}

          {data.length == 0 && <NoDataRow />}

          <tr className="bg-gray-200 font-bold">
            <td className="px-4 py-2 border">Total</td>
            <td className="px-4 py-2 border">
              <ReportPoysa value={totalDebit} />
            </td>
            <td className="px-4 py-2 border">
              <ReportPoysa value={totalCredit} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DebitCreditTable;

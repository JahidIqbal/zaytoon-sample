import React, { Fragment, ReactNode } from "react";
import NameValueSection from "./NameValueSection";
import EmptyRow from "../EmptyRow";
import { LabelAndValue } from "@/types/Common";
import { NameValue } from "../../Types";

interface Props {
  data: LabelAndValue<NameValue[]>[];
  lastRow?: ReactNode;
}

function NameValueTable({ data, lastRow }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm bg-white">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">Code</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border text-right">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Fragment key={item.label}>
              <NameValueSection name={item.label} items={item.value} />
              <EmptyRow />
            </Fragment>
          ))}
          {lastRow}
        </tbody>
      </table>
    </div>
  );
}

export default NameValueTable;

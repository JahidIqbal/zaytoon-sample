import React from "react";
import ReportPoysa from "../ReportPoysa";
import { NameValue } from "../../Types";
import { getTotal } from "../../functions";
import NoDataRow from "../NoDataRow";

interface Props {
  name: string;
  items: NameValue[];
}

function NameValueSection({ name, items }: Props) {
  return (
    <>
      <tr className="bg-gray-200 font-bold">
        <td className="px-4 py-2 border" colSpan={3}>
          {name}
        </td>
      </tr>

      {items.map((item, index) => (
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-2 border">{item.code}</td>
          <td className="px-4 py-2 border">{item.name}</td>
          <td className="px-4 py-2 border">
            <ReportPoysa value={item.value} />
          </td>
        </tr>
      ))}
      
      {items.length == 0 && <NoDataRow />}

      <tr className="bg-gray-300 font-bold">
        <td className="px-4 py-2 border" colSpan={2}>
          Total {name}
        </td>
        <td className="px-4 py-2 border">
          <ReportPoysa value={getTotal(items)} />
        </td>
      </tr>
    </>
  );
}

export default NameValueSection;

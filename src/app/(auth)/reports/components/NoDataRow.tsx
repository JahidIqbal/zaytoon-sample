import React from "react";

function NoDataRow() {
  return (
    <tr>
      <td className="px-4 py-2 border text-center" colSpan={3}>
        No Data Found.
      </td>
    </tr>
  );
}

export default NoDataRow;

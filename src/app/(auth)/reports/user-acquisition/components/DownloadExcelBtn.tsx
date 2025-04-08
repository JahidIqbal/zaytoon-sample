"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import { User } from "../Types";


const DownloadExcelBtn: React.FC = () =>{
  
  const [data, setData] = useState<User[]>([
    { date: "2025-02-01", fullName: "Mohana", phone: "23901293019", email: "m@gmail.com", role: "USER" },
    { date: "2025-02-01", fullName: "Propa", phone: "34981394", email: "p@gmail.com", role: "MERCHANT" },
    { date: "2025-02-02", fullName: "Irfana", phone: "5093123488", email: "irfana@gmail.com", role: "USER" },
    { date: "2025-02-02", fullName: "Jarin", phone: "6729834723", email: "jarin@gmail.com", role: "MERCHANT" },
    { date: "2025-02-02", fullName: "Onamika", phone: "9234782394", email: "onamika@gmail.com", role: "USER" },
    { date: "2025-02-03", fullName: "Shanto", phone: "8794561230", email: "shanto@gmail.com", role: "USER" },
    { date: "2025-02-03", fullName: "Roni", phone: "7891234560", email: "roni@gmail.com", role: "MERCHANT" },
    { date: "2025-02-04", fullName: "Dipu", phone: "9988776655", email: "dipu@gmail.com", role: "MERCHANT" },
    { date: "2025-02-04", fullName: "Jahid", phone: "6677889900", email: "jahid@gmail.com", role: "USER" },
    { date: "2025-02-05", fullName: "Ahad", phone: "5544332211", email: "ahad@gmail.com", role: "MERCHANT" }
  ]);
  
  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "User List");
    XLSX.writeFile(wb, "user_registration_list.xlsx");
  };

  return (
    <SecondaryBtn
      isLoading={false}
      icon="down"
      btnType="Download"
      onClick={handleDownload}
    />
  );
};

export default DownloadExcelBtn;

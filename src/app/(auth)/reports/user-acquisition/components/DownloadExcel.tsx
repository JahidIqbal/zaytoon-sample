"use client";

import React, { useState } from "react";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import getUserRegistrationList from "../action/GetUserRegistrationList";

interface DownloadExcelProps {
  searchParams: { start?: string; end?: string } | undefined;
}

const DownloadExcel: React.FC<DownloadExcelProps> = ({ searchParams }) => {
  const { start = "", end = "" } = searchParams || {};
  const [loading, setLoading] = useState(false);

  const download = (file: Blob) => {
    const url = window.URL.createObjectURL(file);
    const filename = "user_registration_list.xlsx";
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const showToast = (result: any) => {
    
    if (result.success) {
      console.log("Download started!");
    } else {
      console.log("Error occurred!");
    }
  };

  const handleClick = async () => {
    setLoading(true);

    try {
      const result = await getUserRegistrationList(start, end); 
      showToast(result); 

      if (result.responseData) {
        download(result.responseData); 
      }
    } catch (error) {
      console.error("Error fetching the user registration list:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SecondaryBtn
      isLoading={loading}
      icon="down"
      btnType="Download"
      onClick={handleClick} 
    />
  );
};

export default DownloadExcel;
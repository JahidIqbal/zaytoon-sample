"use client";

import dynamic from "next/dynamic";
import React from "react";
import { PdfDocProps } from "../../Types";

const DownloadBtn = dynamic(() => import("./DownloadBtn"), { ssr: false });

function ReportButton(props: PdfDocProps) {
  return <DownloadBtn {...props} />;
}

export default ReportButton;

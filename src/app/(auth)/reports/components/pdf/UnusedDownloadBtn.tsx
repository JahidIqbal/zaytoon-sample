"use client";

import React, { useState } from "react";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  id: string;
}

function DownloadBtn({ id }: Props) {
  const [loading, setLoading] = useState(false);

  const printDocument = () => {
    setLoading(true);

    const input = document.getElementById(id);

    if (input == null) {
      setLoading(false);
      return;
    }

    html2canvas(input).then((canvas) => {
      const data = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("download.pdf");
      setLoading(false);
    });
  };

  return (
    <SecondaryBtn
      isLoading={loading}
      onClick={printDocument}
      icon="down"
      btnType="Download"
    />
  );
}

export default DownloadBtn;

"use client";

import { usePDF } from "@react-pdf/renderer";
import React from "react";
import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import { PdfDocProps } from "../../Types";

function DownloadBtn({ document }: PdfDocProps) {
  if (document == null) return null;

  const [instance, updateInstance] = usePDF({
    document,
  });

  if (instance.error) {
    console.error(instance.error);
    return null;
  }

  return (
    <SecondaryBtn
      isLoading={instance.loading}
      redirect={instance.url ?? "#"}
      icon="down"
      download="test.pdf"
      btnType="Download"
    />
  );
}

export default DownloadBtn;

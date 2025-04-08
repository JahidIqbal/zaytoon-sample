"use client";

import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";

interface Props {
  value: number;
}

function Value({ value }: Props) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    setVal(value);
  }, []);

  return <NumberFlow value={val} />;
}

export default Value;

"use client"

import { DateRangePicker } from "@heroui/react";
import type {RangeValue} from "@react-types/shared";
import type {DateValue} from "@react-types/datepicker";
import React, { useEffect } from "react";
import { parseDate, getLocalTimeZone, today, parseDateTime } from "@internationalized/date";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addQuery } from "@/utils/UrlUtil";


function ReportDateRange() {
  const searchParams = useSearchParams();
  const startParam = searchParams.get('start');
  const endParam = searchParams.get('end');

  const [value, setValue] = React.useState<RangeValue<DateValue> | null>({
    start: startParam ? parseDate(startParam) : today(getLocalTimeZone()).set({ day: 1 }),
    end:  endParam ? parseDate(endParam) : today(getLocalTimeZone()),
  });

  const {push} = useRouter();
  const path = usePathname();

  useEffect(() => {
    push(addQuery(path, {
      start: value?.start,
      end: value?.end,
    }));
  }, [value]);

  return (
    <DateRangePicker
      variant="flat"
      className="max-w-xs"
      label="Select Timeframe"
      visibleMonths={2}
      defaultValue={value}
      disableAnimation
      maxValue={today(getLocalTimeZone())}
      onChange={setValue}
      
    />
  );
}

export default ReportDateRange;

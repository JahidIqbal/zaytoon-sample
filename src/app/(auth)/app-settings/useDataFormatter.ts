import { useMemo } from "react";
import { LabelAndValue } from "@/types/Common";
import { idNameToLabelValueString } from "@/utils/ArrayUtils";
import { Account, ChartOfAccounts, TransactionType } from "./Types";

const useDataFormatter = (
  transactionsTypes: TransactionType[],
  chartOfAccounts: ChartOfAccounts[],
  accounts: Account[]
) => {
  const typesLV: LabelAndValue[] = useMemo(() => {
    return transactionsTypes.map((t) => ({
      label: t.name,
      value: t.transactioncode,
    }));
  }, [transactionsTypes]);

  const chartOfAccountsLV: LabelAndValue[] = useMemo(() => {
    return chartOfAccounts.map(idNameToLabelValueString);
  }, [chartOfAccounts]);

  const accountsLV: LabelAndValue[] = useMemo(() => {
    return accounts.map((a) => ({
      label: a.name,
      value: a.identifier,
    }));
  }, [accounts]);

  return {
    types: typesLV,
    accounts: accountsLV,
    chartOfAccounts: chartOfAccountsLV,
  };
};

export default useDataFormatter;

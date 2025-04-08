"use client";

import React from "react";
import SelectField from "@/components/forms/SelectField";
import Form from "@/components/forms/Form";
import useAppSettingsForm from "../hooks/useAppSettingsForm";
import {
  Account,
  AppSettings,
  ChartOfAccounts,
  TransactionType,
} from "../Types";

interface Props {
  appSetting: AppSettings;
  chartOfAccounts: ChartOfAccounts[];
  transactionsTypes: TransactionType[];
  accounts: Account[];
}

function AppSettingsForm(props: Props) {
  const { formData, handleSubmit, update, loading, data } =
    useAppSettingsForm(props);

  const { chartOfAccounts, types } = data;

  return (
    <Form
      onSubmit={handleSubmit}
      buttonProps={{
        disabled: false,
        loading,
        content: "Update",
      }}
    >
      <SelectField
        label="Chart Of Account for Merchant Wallet"
        id="customerWalletCoaId"
        name="customerWalletCoaId"
        items={chartOfAccounts}
        value={formData.merchantWalletCoaId?.toString()}
        onChange={(selected) =>
          update.form("merchantWalletCoaId", parseInt(selected))
        }
      />

      <hr />

      <div className="grid grid-cols-3 gap-4">
        <SelectField
          label="Send Money Transaction"
          id="sendMoneyTrxCode"
          name="sendMoneyTrxCode"
          items={types}
          value={formData.sendMoneyTrxCode}
          onChange={(selected) => update.form("sendMoneyTrxCode", selected)}
        />
        <SelectField
          label="Settlement Transaction"
          id="settlementTrxCode"
          name="settlementTrxCode"
          items={types}
          value={formData.settlementTrxCode}
          onChange={(selected) => update.form("settlementTrxCode", selected)}
        />
        
      </div>
    </Form>
  );
}

export default AppSettingsForm;

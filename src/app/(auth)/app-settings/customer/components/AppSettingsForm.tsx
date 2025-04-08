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
import TopUpOperatorForm from "./TopUpOperatorForm";
import BillerCategoryForm from "./BillerCategoryForm";
import AddOrTransferForm from "./AddOrTransferForm";

interface Props {
  appSetting: AppSettings;
  chartOfAccounts: ChartOfAccounts[];
  transactionsTypes: TransactionType[];
  accounts: Account[];
}

function AppSettingsForm(props: Props) {
  const { formData, handleSubmit, update, loading, data, addOrTransfer } =
    useAppSettingsForm(props);

  const { chartOfAccounts, types, accounts } = data;

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
        label="Chart Of Account for Customer Wallet"
        id="customerWalletCoaId"
        name="customerWalletCoaId"
        items={chartOfAccounts}
        value={formData.customerWalletCoaId?.toString()}
        onChange={(selected) =>
          update.form("customerWalletCoaId", parseInt(selected))
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
          label="Make Payment Transaction"
          id="makePaymentTrxCode"
          name="makePaymentTrxCode"
          items={types}
          value={formData.makePaymentTrxCode}
          onChange={(selected) => update.form("makePaymentTrxCode", selected)}
        />
        <SelectField
          label="Request Money Transaction"
          id="requestMoneyTrxCode"
          name="requestMoneyTrxCode"
          items={types}
          value={formData.requestMoneyTrxCode}
          onChange={(selected) => update.form("requestMoneyTrxCode", selected)}
        />
      </div>

      <hr />

      <SelectField
        label="Top Up Transaction"
        id="topUpTrxCode"
        name="topUpTrxCode"
        items={types}
        value={formData.topUpTrxCode}
        onChange={(selected) => update.form("topUpTrxCode", selected)}
      />

      <div className="pl-10 grid grid-cols-3 gap-4">
        <TopUpOperatorForm
          accounts={accounts}
          selected={formData.topUpOperators}
          update={update.topUpOperator}
        />
      </div>

      <hr />

      <SelectField
        label="Bill Pay Transaction"
        id="billPayTrxCode"
        name="billPayTrxCode"
        items={types}
        value={formData.billPayTrxCode}
        onChange={(selected) => update.form("billPayTrxCode", selected)}
      />
      <div className="pl-10 grid grid-cols-3 gap-4">
        <BillerCategoryForm
          accounts={accounts}
          selected={formData.billerCategories}
          update={update.biller}
        />
      </div>

      <hr />
      <AddOrTransferForm
        aotkey="addMoneyInfo"
        title="Add Money"
        types={types}
        accounts={accounts}
        aotForm={addOrTransfer}
      />
      <hr />
      <AddOrTransferForm
        aotkey="fundTransferInfo"
        title="Fund Transfer"
        types={types}
        accounts={accounts}
        aotForm={addOrTransfer}
      />
    </Form>
  );
}

export default AppSettingsForm;

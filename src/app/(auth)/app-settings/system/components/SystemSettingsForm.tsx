"use client";

import Form from "@/components/forms/Form";
import { Account, ChartOfAccounts, SystemSettings, SystemSettingsFormProps, TransactionType } from "../Types";
import SelectField from "@/components/forms/SelectField";
import useSystemSettingsForm from "../hooks/useSystemSettingsForm";

interface Props {
    systemSetting: SystemSettings;
    chartOfAccounts: ChartOfAccounts[];
    transactionsTypes: TransactionType[];
    accounts: Account[];
}

function SystemSettingsForm(props: SystemSettingsFormProps) {
  const { formData, handleSubmit, update, loading, data } = useSystemSettingsForm(props);

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
      <div className="grid grid-cols-3 gap-4">
        <SelectField
          label="Temp Settlement Transaction"
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

export default SystemSettingsForm;

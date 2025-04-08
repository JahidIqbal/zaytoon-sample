import SelectField from "@/components/forms/SelectField";
import { LabelAndValue } from "@/types/Common";
import React from "react";
import { TopUpOperators, UpdateTopUpOp } from "../Types";

interface Props {
  selected?: TopUpOperators;
  accounts: LabelAndValue[];
  update: UpdateTopUpOp;
}

function TopUpOperatorForm({ accounts, selected, update }: Props) {
  return (
    <>
      <SelectField
        label="GP Account"
        id="gpAccountId"
        name="gpAccountId"
        items={accounts}
        value={selected?.gpAccountId}
        onChange={(selected) => update("gpAccountId", selected)}
      />
      <SelectField
        label="Skitto Account"
        id="skittoAccountId"
        name="skittoAccountId"
        items={accounts}
        value={selected?.skittoAccountId}
        onChange={(selected) => update("skittoAccountId", selected)}
      />
      <SelectField
        label="Robi Account"
        id="robiAccountId"
        name="robiAccountId"
        items={accounts}
        value={selected?.robiAccountId}
        onChange={(selected) => update("robiAccountId", selected)}
      />

      <SelectField
        label="BL Account"
        id="blAccountId"
        name="blAccountId"
        items={accounts}
        value={selected?.blAccountId}
        onChange={(selected) => update("blAccountId", selected)}
      />
      <SelectField
        label="Teletalk Account"
        id="ttAccountId"
        name="ttAccountId"
        items={accounts}
        value={selected?.ttAccountId}
        onChange={(selected) => update("ttAccountId", selected)}
      />
      <SelectField
        label="Airtel Account"
        id="airtelAccountId"
        name="airtelAccountId"
        items={accounts}
        value={selected?.airtelAccountId}
        onChange={(selected) => update("airtelAccountId", selected)}
      />
    </>
  );
}

export default TopUpOperatorForm;

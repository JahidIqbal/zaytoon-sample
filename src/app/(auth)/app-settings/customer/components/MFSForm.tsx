import SelectField from "@/components/forms/SelectField";
import { LabelAndValue } from "@/types/Common";
import React from "react";
import { AddOrTransferKey, MFS, UpdateMfs } from "../Types";

interface Props {
  aotkey: AddOrTransferKey;
  selected?: MFS;
  accounts: LabelAndValue[];
  update: UpdateMfs;
}

function MFSForm({ aotkey, accounts, selected, update }: Props) {
  return (
    <>
      <SelectField
        label="bKash Account"
        id="bkashAccountId"
        name="bkashAccountId"
        items={accounts}
        value={selected?.bkashAccountId}
        onChange={(selected) => update(aotkey, "bkashAccountId", selected)}
      />
      <SelectField
        label="Nagad Account"
        id="nagadAccountId"
        name="nagadAccountId"
        items={accounts}
        value={selected?.nagadAccountId}
        onChange={(selected) => update(aotkey, "nagadAccountId", selected)}
      />
    </>
  );
}

export default MFSForm;

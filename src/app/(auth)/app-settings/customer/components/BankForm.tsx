import SelectField from "@/components/forms/SelectField";
import { LabelAndValue } from "@/types/Common";
import React from "react";
import { AddOrTransferKey, Banks, UpdateBanks } from "../Types";

interface Props {
  aotkey: AddOrTransferKey;
  selected?: Banks;
  accounts: LabelAndValue[];
  update: UpdateBanks;
}

function BankForm({ aotkey, accounts, selected, update }: Props) {
  return (
    <>
      <SelectField
        label="City Bank Account"
        id="cblAccountId"
        name="cblAccountId"
        items={accounts}
        value={selected?.cblAccountId}
        onChange={(selected) => update(aotkey, "cblAccountId", selected)}
      />
    </>
  );
}

export default BankForm;

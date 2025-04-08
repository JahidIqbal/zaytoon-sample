import SelectField from "@/components/forms/SelectField";
import { LabelAndValue } from "@/types/Common";
import React from "react";
import { AddOrTransferKey, Cards, UpdateCards } from "../Types";

interface Props {
  aotkey: AddOrTransferKey;
  selected?: Cards;
  accounts: LabelAndValue[];
  update: UpdateCards;
}

function CardForm({ aotkey, accounts, selected, update }: Props) {
  return (
    <>
      <SelectField
        label="Visa Account"
        id="visaAccountId"
        name="visaAccountId"
        items={accounts}
        value={selected?.visaAccountId}
        onChange={(selected) => update(aotkey, "visaAccountId", selected)}
      />
      <SelectField
        label="MasterCard Account"
        id="masterAccountId"
        name="masterAccountId"
        items={accounts}
        value={selected?.masterAccountId}
        onChange={(selected) => update(aotkey, "masterAccountId", selected)}
      />
    </>
  );
}

export default CardForm;

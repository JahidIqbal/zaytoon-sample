import SelectField from "@/components/forms/SelectField";
import React from "react";
import MFSForm from "./MFSForm";
import CardForm from "./CardForm";
import BankForm from "./BankForm";
import { LabelAndValue } from "@/types/Common";
import { AddOrTransferFormType, AddOrTransferKey } from "../Types";

interface Props {
  aotkey: AddOrTransferKey;
  title: string;
  types: LabelAndValue[];
  accounts: LabelAndValue[];
  aotForm: AddOrTransferFormType;
}

function AddOrTransferForm({ aotkey, title, types, accounts, aotForm }: Props) {
  return (
    <>
      <h2 className="text-2xl font-medium">{title}</h2>

      <SelectField
        label="Via MFS"
        id={`${aotkey}_mfsTransferTrxCode`}
        name={`${aotkey}_mfsTransferTrxCode`}
        items={types}
        value={aotForm.selectedCodes.mfs(aotkey)}
        onChange={(selected) => aotForm.updateCodes.mfs(aotkey, selected)}
      />
      <div className="pl-10 grid grid-cols-3 gap-4">
        <MFSForm
          aotkey={aotkey}
          accounts={accounts}
          selected={aotForm.selectedAccounts.mfs(aotkey)}
          update={aotForm.updateAccounts.mfs}
        />
      </div>

      <hr />

      <SelectField
        label="Via Card"
        id={`${aotkey}_cardTransferTrxCode`}
        name={`${aotkey}_cardTransferTrxCode`}
        items={types}
        value={aotForm.selectedCodes.cards(aotkey)}
        onChange={(selected) => aotForm.updateCodes.cards(aotkey, selected)}
      />
      <div className="pl-10 grid grid-cols-3 gap-4">
        <CardForm
          aotkey={aotkey}
          accounts={accounts}
          selected={aotForm.selectedAccounts.cards(aotkey)}
          update={aotForm.updateAccounts.cards}
        />
      </div>

      <hr />

      <SelectField
        label="Via Bank"
        id={`${aotkey}_bankTransferTrxCode`}
        name={`${aotkey}_bankTransferTrxCode`}
        items={types}
        value={aotForm.selectedCodes.banks(aotkey)}
        onChange={(selected) => aotForm.updateCodes.banks(aotkey, selected)}
      />
      <div className="pl-10 grid grid-cols-3 gap-4">
        <BankForm
          aotkey={aotkey}
          accounts={accounts}
          selected={aotForm.selectedAccounts.banks(aotkey)}
          update={aotForm.updateAccounts.banks}
        />
      </div>
    </>
  );
}

export default AddOrTransferForm;

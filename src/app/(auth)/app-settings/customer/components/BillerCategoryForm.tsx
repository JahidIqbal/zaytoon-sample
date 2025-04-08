import SelectField from "@/components/forms/SelectField";
import { LabelAndValue } from "@/types/Common";
import React from "react";
import { BillerCategories, UpdateBiller } from "../Types";

interface Props {
  selected?: BillerCategories;
  accounts: LabelAndValue[];
  update: UpdateBiller;
}

function BillerCategoryForm({ accounts, selected, update }: Props) {
  return (
    <>
      <SelectField
        label="DESCO Account"
        id="descoAccountId"
        name="descoAccountId"
        items={accounts}
        value={selected?.descoAccountId}
        onChange={(selected) => update("descoAccountId", selected)}
        
      />
      <SelectField
        label="Polli Bidyut Account"
        id="pbAccountId"
        name="pbAccountId"
        items={accounts}
        value={selected?.pbAccountId}
        onChange={(selected) => update("pbAccountId", selected)}
        
      />
      <SelectField
        label="WASA Account"
        id="wasaAccountId"
        name="wasaAccountId"
        items={accounts}
        value={selected?.wasaAccountId}
        onChange={(selected) => update("wasaAccountId", selected)}
        
      />
      <SelectField
        label="Titas (Gas) Account"
        id="titasAccountId"
        name="titasAccountId"
        items={accounts}
        value={selected?.titasAccountId}
        onChange={(selected) => update("titasAccountId", selected)}
        
      />
      <SelectField
        label="Dot Net (Internet) Account"
        id="dotNetAccountId"
        name="dotNetAccountId"
        items={accounts}
        value={selected?.dotNetAccountId}
        onChange={(selected) => update("dotNetAccountId", selected)}
        
      />
    </>
  );
}

export default BillerCategoryForm;

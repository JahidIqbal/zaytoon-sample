import { IdAndName } from "@/types/Common";

export interface ChartOfAccounts extends IdAndName {}

export interface ChartOfAccountsResponse {
  chartofaccounts: ChartOfAccounts[];
}

export interface Account extends IdAndName {
  identifier: string;
}

export interface AccountsResponse {
  accounts: Account[];
}

export interface TransactionType extends IdAndName {
  transactioncode: string;
}

export interface TransactionTypesResponse {
  transactiontypes: TransactionType[];
}
import { Account, ChartOfAccounts, TransactionType } from '../Types';

export * from '../Types';


export interface SystemSettings {
  settlementTrxCode?: string;
}

export interface SystemSettingsFormProps {
  systemSetting: SystemSettings;
  chartOfAccounts: ChartOfAccounts[];
  transactionsTypes: TransactionType[];
  accounts: Account[];
}

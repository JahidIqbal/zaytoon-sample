import { Account, ChartOfAccounts, TransactionType } from '../Types';

export * from '../Types';


export interface AppSettings {
  merchantWalletCoaId?: number;
  sendMoneyTrxCode?: string;
  settlementTrxCode?: string;
}

export interface AppSettingsFormProps {
  appSetting: AppSettings;
  chartOfAccounts: ChartOfAccounts[];
  transactionsTypes: TransactionType[];
  accounts: Account[];
}

import { Account, ChartOfAccounts, TransactionType } from '../Types';

export * from '../Types';

export interface TopUpOperators {
  gpAccountId?: string;
  skittoAccountId?: string;
  robiAccountId?: string;
  blAccountId?: string;
  ttAccountId?: string;
  airtelAccountId?: string;
}

export interface BillerCategories {
  descoAccountId?: string;
  pbAccountId?: string;
  wasaAccountId?: string;
  titasAccountId?: string;
  dotNetAccountId?: string;
}
export interface MFS {
  bkashAccountId?: string;
  nagadAccountId?: string;
}

export interface Cards {
  visaAccountId?: string;
  masterAccountId?: string;
}

export interface Banks {
  cblAccountId?: string;
}

export interface AddOrTransferMoney {
  mfs?: MFS;
  banks?: Banks;
  cards?: Cards;
}

export interface FundTransferInfo extends AddOrTransferMoney {}

export interface AddMoneyInfo extends AddOrTransferMoney {}

export interface AppSettings {
  customerWalletCoaId?: number;
  sendMoneyTrxCode?: string;
  makePaymentTrxCode?: string;
  requestMoneyTrxCode?: string;
  topUpTrxCode?: string;
  topUpOperators: TopUpOperators;
  billPayTrxCode?: string;
  billerCategories?: BillerCategories;

  addMoneyMfsTransferTrxCode?: string;
  addMoneyBankTransferTrxCode?: string;
  addMoneyCardTransferTrxCode?: string;
  addMoneyInfo?: AddMoneyInfo;

  fundTransferMfsTransferTrxCode?: string;
  fundTransferBankTransferTrxCode?: string;
  fundTransferCardTransferTrxCode?: string;
  fundTransferInfo?: FundTransferInfo;
}

export interface AppSettingsFormProps {
  appSetting: AppSettings;
  chartOfAccounts: ChartOfAccounts[];
  transactionsTypes: TransactionType[];
  accounts: Account[];
}

export type UpdateTopUpOp = <K extends keyof TopUpOperators>(
  key: K,
  value: TopUpOperators[K]
) => void;

export type UpdateBiller = <K extends keyof BillerCategories>(
  key: K,
  value: BillerCategories[K]
) => void;

export type AddOrTransferKey = "addMoneyInfo" | "fundTransferInfo";
export type AddOrTransferTypes = "mfs" | "cards" | "banks";

export type UpdateMfs = <K extends keyof MFS>(
  key: AddOrTransferKey,
  mfsKey: K,
  value: MFS[K]
) => void;

export type UpdateCards = <K extends keyof Cards>(
  key: AddOrTransferKey,
  cardKey: K,
  value: Cards[K]
) => void;

export type UpdateBanks = <K extends keyof Banks>(
  key: AddOrTransferKey,
  bankKey: K,
  value: Banks[K]
) => void;

export type UpdateCode = (key: AddOrTransferKey, value: string) => void;

export type GetKeyForTrxCode = (
  key: AddOrTransferKey,
  type: AddOrTransferTypes
) => keyof AppSettings;

export interface AddOrTransferFormType {
  selectedCodes: {
    mfs: (key: AddOrTransferKey) => string | undefined;
    cards: (key: AddOrTransferKey) => string | undefined;
    banks: (key: AddOrTransferKey) => string | undefined;
  };
  selectedAccounts: {
    mfs: (key: AddOrTransferKey) => MFS | undefined;
    cards: (key: AddOrTransferKey) => Cards | undefined;
    banks: (key: AddOrTransferKey) => Banks | undefined;
  };
  updateCodes: {
    mfs: UpdateCode;
    cards: UpdateCode;
    banks: UpdateCode;
  };
  updateAccounts: {
    mfs: UpdateMfs;
    cards: UpdateCards;
    banks: UpdateBanks;
  };
}

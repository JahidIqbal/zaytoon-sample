import PageContainer from "@/components/layout/PageContainer";
import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import { get } from "@/api";
import AppSettingsForm from "./components/AppSettingsForm";
import {
  AccountsResponse,
  AppSettings,
  ChartOfAccountsResponse,
  TransactionTypesResponse,
} from "./Types";
import { addQuery } from "@/utils/UrlUtil";

const Page = async () => {
  const [appSetting, coaRes, trxTypesRes, accountRes] = await Promise.all([
    get<AppSettings>(`api/v1/admin/user/admin-settings`),
    get<ChartOfAccountsResponse>(`api/v1/chart-of-account?onlyParent=false`),
    get<TransactionTypesResponse>(`api/v1/transaction-type`),
    get<AccountsResponse>(
      addQuery(`api/v1/account`, {
        size: 100,
        transactionType: "SYSTEM",
      })
    ),
  ]);

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="App Settings" lastLabel="Customer" />
        </div>
      </div>

      <PageContainer title="Customer App Settings">
        <AppSettingsForm
          appSetting={appSetting}
          chartOfAccounts={coaRes.chartofaccounts}
          transactionsTypes={trxTypesRes.transactiontypes}
          accounts={accountRes.accounts}
        />
      </PageContainer>
    </div>
  );
};

export default Page;

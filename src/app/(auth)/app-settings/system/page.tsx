import { get } from "@/api";
import {
  SystemSettings,
  AccountsResponse,
  ChartOfAccountsResponse,
  TransactionTypesResponse,
} from "./Types";

import { addQuery } from "@/utils/UrlUtil";
import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import PageContainer from "@/components/layout/PageContainer";
import SystemSettingsForm from "./components/SystemSettingsForm";

const Page = async () => {
  const [systemSettings, coaRes, trxTypesRes, accountRes] = await Promise.all([
    get<SystemSettings>(`api/v1/admin/user/system/settings`),
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
          <L3Breadcrumb midLabel="App Settings" lastLabel="System" />
        </div>
      </div>

      <PageContainer title="System Settings">
        <SystemSettingsForm
          systemSetting={systemSettings}
          chartOfAccounts={coaRes.chartofaccounts}
          transactionsTypes={trxTypesRes.transactiontypes}
          accounts={accountRes.accounts}
        />
      </PageContainer>
    </div>
  );
};


export default Page;
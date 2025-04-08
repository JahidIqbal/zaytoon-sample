import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import UsersTable from "./components/UsersTable";
import { get } from "@/api/ApiClient";
import { UsersResponse } from "./Types";
import { PageProp } from "@/types/Common";
import PageContainer from "@/components/layout/PageContainer";
import { addPageQueryForApi } from "@/utils/UrlUtil";
import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import { log } from "console";

const Page = async (props: PageProp) => {
  const data = await get<UsersResponse>(
    await addPageQueryForApi(`api/v1/admin-user`, props)
  );
  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="Admin Users" midUrl="/admin-users" />
        </div>

        <div className="flex justify-end">
          <SecondaryBtn
            redirect="/admin-users/create"
            icon="add"
            btnType="Add New"
          />
        </div>
      </div>

      <PageContainer title="All Admin Users">
        <UsersTable data={data} />
      </PageContainer>
    </div>
  );
};

export default Page;

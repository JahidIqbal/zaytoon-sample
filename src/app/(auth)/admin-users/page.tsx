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
  
  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="Admin Users" midUrl="/admin-users" />
        </div>
      </div>
    </div>
  );
};

export default Page;

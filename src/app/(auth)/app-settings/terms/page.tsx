import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import { get } from "@/api";
import { TermsResponse } from "./Types";
import FeatureTabs from "./components/FeatureTabs";

const Page = async () => {
  const terms = await get<TermsResponse>(`api/v1/admin/contents/terms`);

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="App Settings" lastLabel="Terms" />
        </div>
      </div>

      <FeatureTabs terms={terms} />
    </div>
  );
};

export default Page;

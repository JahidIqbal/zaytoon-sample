import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import { get } from "@/api";
import { PoliciesResponse } from "./Types";
import FeatureTabs from "./components/FeatureTabs";

const Page = async () => {
  const policies = await get<PoliciesResponse>(`api/v1/admin/contents/policy`);

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="App Settings" lastLabel="Policies" />
        </div>
      </div>

      <FeatureTabs policies={policies} />
    </div>
  );
};

export default Page;

import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import { get } from "@/api";
import { FaqResponse } from "./Types"; 
import FeatureTabs from "./components/FeatureTabs";

const Page = async () => {
  const faqs = await get<FaqResponse>(`api/v1/admin/contents/faq`);

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="App Settings" lastLabel="FAQs" />
        </div>
      </div>

      <FeatureTabs faqs={faqs} />
    </div>
  );
};

export default Page;

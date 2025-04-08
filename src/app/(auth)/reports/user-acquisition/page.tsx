import { DateRangeProp } from "@/types/Common";
import PageContainer from "@/components/layout/PageContainer";
import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import Filters from "./components/Filters";
import { get } from "@/api";
import OnboardingStatsCount from "./components/OnboardingStatsCount";
import DownloadExcel from "./components/DownloadExcel";
import { UserAcquisitionData } from "./Types";
import { addQuery } from "@/utils/UrlUtil";


const Page = async (props: DateRangeProp) => {
  const searchParams = await props.searchParams;

  const data = await get<UserAcquisitionData>(
    addQuery(`api/v1/merchant/user/report`, searchParams)
  );

  const userAcquisitionData = data?.data || [];
  const pagination = data?.pagination || {
    totalcount: 0,
    currentpage: 0,
    currentpagetotalcount: 10,
    hasnext: false,
  };

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="Reports" lastLabel="User Acquisition" />
        </div>
        <div className="flex justify-end space-x-4">
        <DownloadExcel searchParams={searchParams} />
        </div>
      </div>

      <PageContainer title="User Acquisition">
        <div className="mb-6">
          <Filters />
        </div>
        <OnboardingStatsCount data={userAcquisitionData} pagination={pagination} />
      </PageContainer>
    </div>
  );
};

export default Page;

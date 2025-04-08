import L3Breadcrumb from "@/components/layout/L3Breadcrumb";
import { get } from "@/api";
import TargetTabs from "./components/TargetTabs";
import { SliderResponse, UserType } from "./Types";
import ImagesContainer from "./components/ImagesContainer";

const Page = async () => {
  const sliders = await get<SliderResponse>(`api/v1/admin/slider`);

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="App Settings" lastLabel="Sliders" />
        </div>
      </div>

      <TargetTabs
        customer={
          <ImagesContainer
            userType={UserType.CUSTOMER}
            title="Customer App Sliders"
            images={sliders.data.filter((i) => i.userType == UserType.CUSTOMER)}
          />
        }
        merchant={
          <ImagesContainer
            userType={UserType.MERCHANT}
            title="Merchant App Sliders"
            images={sliders.data.filter((i) => i.userType == UserType.MERCHANT)}
          />
        }
      />
    </div>
  );
};

export default Page;

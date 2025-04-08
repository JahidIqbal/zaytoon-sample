import { PageProp } from "@/types/Common";
import BankImages from "./components/BankImages";


const Page = async (props: PageProp) => {
  
  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <BankImages />
        </div>
      </div>
    </div>
  );
};

export default Page;

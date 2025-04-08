import { PageProp } from "@/types/Common";
import InsuranceCards from "./components/InsuranceCards";


const BankPage= async (props: PageProp) => {
  
  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <InsuranceCards />
        </div>
      </div>
    </div>
  );
};

export default BankPage;

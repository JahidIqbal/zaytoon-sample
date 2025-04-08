import { PageProp } from "@/types/Common";
import WalletImages from "./components/WalletImages";


const BankPage= async (props: PageProp) => {
  
  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <WalletImages />
        </div>
      </div>
    </div>
  );
};

export default BankPage;

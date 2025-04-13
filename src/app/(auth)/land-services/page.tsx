import Travelservicescard from "./components/Landservicescard";
import MFSCard from "./components/Landservicescard";

const Page = () => {
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col mt-6">
          <Travelservicescard />
        </div>
      </div>
    </div>
  );
};

export default Page;

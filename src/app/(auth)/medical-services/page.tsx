import Medicalservicescard from "./components/Medicalservicescard";

const Page = () => {
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col mt-6">
          <Medicalservicescard />
        </div>
      </div>
    </div>
  );
};

export default Page;

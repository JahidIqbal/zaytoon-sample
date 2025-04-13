import TransactionCard from "./components/TransactionCard";


const Page = () => {
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col mt-6">
          <TransactionCard/>
        </div>
      </div>
    </div>
  );
};

export default Page;

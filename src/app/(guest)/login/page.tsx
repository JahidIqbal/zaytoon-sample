import React from "react";
import CredentialsInput from "./components/CredentialsInput";
import Footer from "@/components/footer/Footer";

const page: React.FC = () => {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-4xl flex justify-center items-center poppins font-semibold mb-8">
              Admin Log In
            </p>
          </div>
          <CredentialsInput />
        </div>
      </div>
    </>
  );
};

export default page;

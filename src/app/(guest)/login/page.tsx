import React from "react";
import CredentialsInput from "./components/CredentialsInput";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 items-center">
          <Image
            className="mt-4 max-w-full h-auto"
            src="/logo.png"
            alt="logo"
            width={140}
            height={150}
          />
          </div>
          <CredentialsInput />
        </div>
      </div>
    </>
  );
};

export default page;

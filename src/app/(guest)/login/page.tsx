import React from "react";
import CredentialsInput from "./components/CredentialsInput";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
        <div className="flex flex-col gap-4 items-center">
          <Image
            className="mt-2"
            src="/logo.png"
            alt="logo"
            width={140}
            height={140}
          />
          <CredentialsInput />
        </div>
      </div>
    </div>
  );
};

export default page;
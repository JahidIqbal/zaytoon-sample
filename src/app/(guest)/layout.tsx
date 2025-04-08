import React from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#7eb456] to-[#a3d66f]">
        <div className="absolute inset-0 bg-[url('/bg-image.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative bg-background-primary flex flex-row-reverse items-center w-auto rounded-2xl">
          <div className="w-1/2 h-[500px] min-w-[400px] flex justify-center">
            <Image
              src="/logo.png"
              alt="hero image"
              height={500}
              width={500}
              className="rounded-r-2xl"
            />
          </div>

          <div className="w-1/2 rounded bg-no-repeat bg-cover flex items-center justify-center">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;

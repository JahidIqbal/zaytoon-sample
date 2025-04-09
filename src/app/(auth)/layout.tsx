"use client";

import NextTopLoader from "nextjs-toploader";
import Image from "next/image";
import dynamic from "next/dynamic";
import { isUserNotLogged } from "@/services/LoggedUserClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
const Sidebar = dynamic(() => import("@/components/layout/sidebar/Sidebar"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/navbar/Navbar"), {
  ssr: false,
});

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    // if (isUserNotLogged()) {
    //   router.replace("/login");
    //   return;
    // }
  }, [isUserNotLogged]);

  return (
    <div className="bg-black">
      <div className="flex h-screen">
        <div className="sticky top-0">
          <div className="flex justify-center ">
            <Image
              className="mt-4 w-[50%] h-auto"
              src="/logo.png"
              alt="logo"
              width={140}
              height={150}
            />
          </div>
          <Sidebar />
        </div>
        <div className="flex flex-col w-full bg-black">
          <div className="sticky top-0 z-10">
            <NextTopLoader color="#4169E1" showSpinner={false} />
            <Navbar />
          </div>
          <div className="h-full w-full bg-[#F4F4F4] overflow-y-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;

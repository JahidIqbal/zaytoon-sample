"use client";

import { ReactNode } from "react";
import { BsShieldCheck, BsWallet } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import {LiaPiggyBankSolid } from "react-icons/lia";
import { getLoggedUser } from "@/services/LoggedUserClient";
import { usePathname } from "next/navigation";
import { trimChar } from "@/utils/StringUtils";

export interface MenuType {
  key: string;
  baseUrl: string;
  label: string;
  pageTitle?: string;
  icon: ReactNode;
  canAccess: boolean;
  subMenus?: Omit<MenuType, "subMenus">[];
}

export default function getMenus(): MenuType[] {
  const user = getLoggedUser();

  return [
    {
      key: "dashboard",
      baseUrl: "/dashboard",
      label: "Dashboard",
      icon: <GoHomeFill />,
      canAccess: true,
    },
    {
      key: "Banks",
      baseUrl: "/banks",
      label: "Banks",
      icon: <LiaPiggyBankSolid />,
      canAccess: true,
    },

    {
      key: "Wallets",
      baseUrl: "/wallets",
      label: "Wallets",
      icon: <BsWallet />,
      canAccess: true,
    },
    {
      key: "Insurance",
      baseUrl: "/insurance",
      label: "Insurance",
      icon: <BsShieldCheck />,
      canAccess: true,
    },

    
  ];
}

function getTitleForNonMenuPages(pathname: string) {
  const isActivePath = (path: string) => {
    return pathname.includes(path);
  };

  return isActivePath("profile") ? "Profile" : "Admin Panel";
}

export function getPageTitle() {
  const pathname = usePathname();

  const isActive = (m: MenuType) => pathname.includes(trimChar(m.baseUrl, "/"));
  const getTitle = (m: MenuType) => m.pageTitle ?? m.label;

  const menu = getMenus().find(isActive);

  if (menu == undefined) return getTitleForNonMenuPages(pathname);
  if (menu.subMenus == undefined) return getTitle(menu);

  const submenu = menu.subMenus.find(isActive);
  if (submenu == undefined) return getTitle(menu);
  return getTitle(submenu);
}

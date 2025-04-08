"use client";

import { ReactNode } from "react";
import { BsWrenchAdjustable } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { GiProfit } from "react-icons/gi";
import { GrTransaction, GrUserFemale } from "react-icons/gr";
import { FaUserTie, FaSearchDollar, FaDonate } from "react-icons/fa";
import { FaMoneyBillTransfer, FaQ } from "react-icons/fa6";
import { PiUserListBold } from "react-icons/pi";
import {
  TbCashRegister,
  TbReportAnalytics,
  TbReportMoney,
} from "react-icons/tb";
import {
  MdAccountBalanceWallet,
  MdAccountTree,
  MdAddBusiness,
  MdAppSettingsAlt,
  MdOutlinePrivacyTip,
  MdOutlineSupervisorAccount,
  MdSlideshow,
  MdSystemSecurityUpdate,
  MdOutlineVideoLibrary,
  MdOutlineFeaturedPlayList
} from "react-icons/md";
import { LiaBalanceScaleRightSolid, LiaPiggyBankSolid } from "react-icons/lia";
import { UserRole } from "@/types/User";
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

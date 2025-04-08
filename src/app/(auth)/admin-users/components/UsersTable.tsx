"use client";

import React, { useCallback, useMemo } from "react";
import { User, UsersResponse } from "../Types";
import DataTable from "@/components/tables/DataTable";
import EditIconBtn from "@/components/buttons/action/EditIconBtn";
import ActivateIconBtn from "@/components/buttons/action/ActivateIconBtn";
import toogleUserStatus from "../actions/ToogleUserStatus";
import { useRouter } from "next/navigation";
import { Chip } from "@heroui/react";
import { NextUiColorMap } from "@/types/Common";
import { showToast } from "@/services/Toaster";
import { UserRole } from "@/types/User";
import ActiveChip from "@/components/chips/ActiveChip";
import deleteAdmin from "../actions/DeleteAdmin";
import DeleteIconBtn from "@/components/buttons/action/DeleteIconBtn";
import { ResultWithoutData } from "@/api";

interface Props {
  data: UsersResponse;
}

export default function UsersTable({ data }: Props) {
  const router = useRouter();  

  const toggleStatus = useCallback(async (user: User) => {
    const res = await toogleUserStatus(user);
    showToast(res);
    if (res.success) router.refresh();
    return res;
  }, []);

  const handleDelete = useCallback(async (user: User): Promise<ResultWithoutData> => {
    const res = await deleteAdmin(user); 
    showToast(res);
    if (res.success) router.refresh();
    return res; 
  }, []);

  const roleColors: NextUiColorMap<UserRole> = useMemo(() => {
    return {
      [UserRole.ADMIN]: 'danger',
    };
  }, []);

  return (
    <DataTable
     data={Array.isArray(data?.users) ? data.users : []} 
     heads={{ 
      id: "Id", 
      email: "Email", 
      firstName: "First Name", 
      lastName: "Last Name", 
      mobile : "Mobile no.",
      role: "Role", 
      isActive: "Status" 
    }}
      dataKey="email"
      pagination={data.pagination}
      renderers={{
        role: (user) => {
          return (
            <Chip className="capitalize" color={roleColors[user.role]} size="sm" variant="bordered">
              {user.role}
            </Chip>
          );
        },
        isActive: (user) => {
          return <ActiveChip isActive={user.isActive} />;
        }
      }}
      actionRenderer={(user) => {
        return (
          <div className="relative flex items-center gap-2">
            <EditIconBtn redirectUrl={`admin-users/${user.id}`} />
            <ActivateIconBtn currentStatus={user.isActive} onChange={() => toggleStatus(user)} />
            <DeleteIconBtn onDelete={() => handleDelete(user)} />
          </div>
        );
      }}
    />
  );
}

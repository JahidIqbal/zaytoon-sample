import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, UserFormData } from "../Types";
import addUser from "../actions/AddUser";
import updateUser from "../actions/UpdateUser";
import { showToast } from "@/services/Toaster";
import { UserRole } from "@/types/User";
import { enumToLabelValueArray } from "@/utils/ArrayUtils";

const useUserForm = (user?: User) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    mobile: user?.mobile ?? "",
    password: "",
  });

  const updateForm = <K extends keyof UserFormData>(
    key: K,
    value: UserFormData[K]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const result = user
      ? await updateUser(user, formData)
      : await addUser(formData);
    
    setLoading(false);

    showToast(result);

    if (result?.success) push("/admin-users");
  };

  return {
    roles: enumToLabelValueArray(UserRole),
    formData,
    updateForm,
    handleSubmit,
    loading,
    canSubmit: true,
  };
};

export default useUserForm;

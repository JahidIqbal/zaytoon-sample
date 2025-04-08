import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/services/Toaster";
import { AppSettings, AppSettingsFormProps } from "../Types";
import updateAppSettings from "../actions/UpdateAppSettings";
import useDataFormatter from "../../useDataFormatter";

const useAppSettingsForm = ({
  appSetting,
  transactionsTypes,
  chartOfAccounts,
  accounts,
}: AppSettingsFormProps) => {
  const { refresh } = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AppSettings>(appSetting);
  const data = useDataFormatter(transactionsTypes, chartOfAccounts, accounts);

  const updateForm = <K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const result = await updateAppSettings(formData);
    setLoading(false);

    showToast(result);
    if (result?.success) refresh();
  };

  return {
    formData,
    handleSubmit,
    loading,
    data,
    update: {
      form: updateForm,
    },
  };
};

export default useAppSettingsForm;

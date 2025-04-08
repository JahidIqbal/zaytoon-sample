import { SystemSettings, SystemSettingsFormProps } from "../Types";
import { useState } from "react";
import useDataFormatter from "../../useDataFormatter";
import updateSystemSettings from "../actions/UpdateSystemSettings";
import { showToast } from "@/services/Toaster";
import { useRouter } from "next/navigation";

const useSystemSettingsForm = ({
    systemSetting,
    transactionsTypes,
    chartOfAccounts,
    accounts,
}: SystemSettingsFormProps) => {
    const { refresh } = useRouter();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<SystemSettings>(systemSetting);
    const data = useDataFormatter(transactionsTypes, chartOfAccounts, accounts);

    const updateForm = <K extends keyof SystemSettings>(
        key: K,
        value: SystemSettings[K]
    ) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);

        const result = await updateSystemSettings(formData);
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
}

export default useSystemSettingsForm;
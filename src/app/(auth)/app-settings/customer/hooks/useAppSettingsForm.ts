import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/services/Toaster";
import {
  AppSettings,
  AppSettingsFormProps,
  UpdateTopUpOp,
  UpdateBiller,
  UpdateMfs,
  UpdateCards,
  UpdateBanks,
  AddOrTransferKey,
  GetKeyForTrxCode,
  UpdateCode,
  AddOrTransferTypes,
  AddOrTransferFormType,
} from "../Types";
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

  const updateTopUpOperator: UpdateTopUpOp = (key, value) => {
    updateForm("topUpOperators", {
      ...formData.topUpOperators,
      [key]: value,
    });
  };

  const updateBiller: UpdateBiller = (key, value) => {
    updateForm("billerCategories", {
      ...formData.billerCategories,
      [key]: value,
    });
  };

  const updateMfs: UpdateMfs = (key, mfsKey, value) => {
    updateForm(key, {
      ...formData[key],
      mfs: {
        ...formData[key]?.mfs,
        [mfsKey]: value,
      },
    });
  };

  const updateCards: UpdateCards = (key, cardKey, value) => {
    updateForm(key, {
      ...formData[key],
      cards: {
        ...formData[key]?.cards,
        [cardKey]: value,
      },
    });
  };

  const updateBanks: UpdateBanks = (key, bankKey, value) => {
    updateForm(key, {
      ...formData[key],
      banks: {
        ...formData[key]?.banks,
        [bankKey]: value,
      },
    });
  };

  const trxCodesMap = useMemo(() => {
    return {
      addMoneyInfo: {
        mfs: "addMoneyMfsTransferTrxCode",
        cards: "addMoneyCardTransferTrxCode",
        banks: "addMoneyBankTransferTrxCode",
      },
      fundTransferInfo: {
        mfs: "fundTransferMfsTransferTrxCode",
        cards: "fundTransferCardTransferTrxCode",
        banks: "fundTransferBankTransferTrxCode",
      },
    };
  }, []);

  const getKeyForTrxCode: GetKeyForTrxCode = (key, type) => {
    return trxCodesMap[key][type] as keyof AppSettings;
  };

  const getUpdateCodeFn = (type: AddOrTransferTypes) => {
    const f: UpdateCode = (key, value) => {
      updateForm(getKeyForTrxCode(key, type), value);
    };
    return f;
  };

  const getCodeFn = (type: AddOrTransferTypes) => {
    return (key: AddOrTransferKey) =>
      formData[getKeyForTrxCode(key, type)] as string | undefined;
  };

  const addOrTransfer: AddOrTransferFormType = {
    selectedCodes: {
      mfs: getCodeFn("mfs"),
      cards: getCodeFn("cards"),
      banks: getCodeFn("banks"),
    },
    selectedAccounts: {
      mfs: (key: AddOrTransferKey) => formData[key]?.mfs,
      cards: (key: AddOrTransferKey) => formData[key]?.cards,
      banks: (key: AddOrTransferKey) => formData[key]?.banks,
    },
    updateCodes: {
      mfs: getUpdateCodeFn("mfs"),
      cards: getUpdateCodeFn("cards"),
      banks: getUpdateCodeFn("banks"),
    },
    updateAccounts: {
      mfs: updateMfs,
      cards: updateCards,
      banks: updateBanks,
    },
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
      topUpOperator: updateTopUpOperator,
      biller: updateBiller,
    },
    addOrTransfer,
  };
};

export default useAppSettingsForm;

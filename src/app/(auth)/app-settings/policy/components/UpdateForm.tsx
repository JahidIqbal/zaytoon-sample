import SecondaryBtn from "@/components/buttons/SecondaryBtn";
import { showToast } from "@/services/Toaster";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Editor from "react-simple-wysiwyg";
import update from "../actions/Update";

interface Props {
  feature: string;
  html: string;
}

function UpdateForm({ feature, html }: Props) {
    const { refresh } = useRouter();
  const [value, setValue] = useState<string | undefined>(html);

  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleSubmit = async () => {
    if (!value) return;
    
    setIsLoading(true);
    const res = await update(feature, value);
    setIsLoading(false);

    showToast(res);
    if (res.success) refresh();
  };

  return (
    <div>
      <Editor value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="flex justify-end items-center">
        <SecondaryBtn
          btnType="Update"
          isLoading={isLoading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default UpdateForm;

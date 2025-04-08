"use client";

import InputField from "@/components/forms/InputField";
import React from "react";
import { User } from "../Types";
import useUserForm from "../hooks/useUserForm";
import EmailField from "@/components/forms/EmailField";
import PasswordField from "@/components/forms/PasswordField";
import SelectField from "@/components/forms/SelectField";
import Form from "@/components/forms/Form";

interface Props {
  user?: User;
}

function UserForm({ user }: Props) {
  const { formData, handleSubmit, roles, updateForm, canSubmit, loading } =
    useUserForm(user);

  return (
    <Form
      onSubmit={handleSubmit}
      buttonProps={{
        disabled: !canSubmit,
        loading,
        content: user ? "Update" : "Create",
      }}
    >
      <InputField
        label="First Name"
        id="firstName"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={(e) => updateForm("firstName", e.target.value)}
        required
      />
      <InputField
        label="Last Name"
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={(e) => updateForm("lastName", e.target.value)}
        required
      />

      <InputField
        label="Mobile"
        id="mobile"
        name="lastName"
        type="text"
        value={formData.mobile}
        onChange={(e) => updateForm("mobile", e.target.value)}
        required
      />

      <EmailField
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => updateForm("email", e.target.value)}
        required
      />

      {!user && (
        <PasswordField
          label="Password"
          id="password"
          name="password"
          value={formData.password ?? ""}
          onChange={(e) => updateForm("password", e.target.value)}
          required
        />
      )}

    </Form>
  );
}

export default UserForm;

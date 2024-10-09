import { useState } from "react";

export function useFormValidation() {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({ userName: "", userPhone: "", isAgreed: "" });

  const validateName = (value: string) => {
    if (!value) return "Обязательное поле";
    return "";
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+7[0-9]{10}$/;
    if (!value) return "Обязательное поле";
    if (!phoneRegex.test(value)) return "Невереный номер телефона";
    return "";
  };

  const validateAgreement = (checked: boolean) => {
    if (!checked) return "Необходимо согласиться с условиями";
    return "";
  };

  const handleNameChange = (value: string) => {
    setUserName(value);
    setErrors((prev) => ({ ...prev, userName: validateName(value) }));
  };


  const handlePhoneChange = (value: string) => {
    if (value === "") {
      setUserPhone("");
    } else {
      if (!value.startsWith("+7")) {
        value = `+7${value.replace(/\D/g, "")}`;
      }
      setUserPhone(value);
    }
    setErrors((prev) => ({ ...prev, userPhone: validatePhone(value) }));
  };

  const handleAgreementChange = (checked: boolean) => {
    setIsAgreed(checked);
    setErrors((prev) => ({ ...prev, isAgreed: validateAgreement(checked) }));
  };

  return {
    userName,
    userPhone,
    isAgreed,
    errors,
    handleNameChange,
    handlePhoneChange,
    handleAgreementChange,
  };
}

interface IForm {
  userName: string,
  userPhone: string,
}

export const submitForm = async (formData: IForm): Promise<{ status: number; formData: IForm }> => {
  const response = await fetch('https://my-json-server.typicode.com/iYuno/db/formPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  
  return {
    status: response.status,
    formData: data,
  };
};

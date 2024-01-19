"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";
import useInput from "@/hooks/useValidation/useInput";

interface InputProps {
  label: string;
  type: "email" | "text" | "password" | string;
  placeholder?: string;
  className?: string;
  initialValue?: string;
  required?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  isCheckError?: boolean;
  checkValidate?: (key: string, error: string, value: string) => void;
  error?: string | boolean | null;
  name: string;
  helperText?: string;
  isNoError: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    isEmpty?: boolean;
    isEmail?: boolean;
    isLink?: boolean;
  };
}

const Input = ({
  className,
  type,
  label,
  initialValue,
  validation,
  isCheckError,
  checkValidate,
  multiline,
  name,
  error,
  helperText,
  isNoError,
}: InputProps) => {
  const textArea = useRef<HTMLTextAreaElement | any>();

  const [isFocused, setIsFocused] = useState(false);
  const onBlurMiddleWare = () => {
    setIsFocused(false);
    // useValid.onBlur()
  };

  //--------------- Validation ----------------//

  const useValid = useInput(initialValue ?? "", {
    isEmail: type === "email",
    isEmpty: true,
    ...validation,
  });

  useEffect(() => {
    if (isCheckError && checkValidate) {
      useValid.onBlur();
      useValid.validateError
        ? checkValidate(name, useValid.validateError, useValid.inputValue)
        : checkValidate(name, "", useValid.inputValue);
    }
  }, [isCheckError]);

  useEffect(() => {
    if (isNoError && error !== null && !error) {
      useValid.resetField();
    }
  }, [isNoError, error]);

  //--------------- Password ----------------//

  // const [isShowPassword, setIsShowPassword] = useState(false)
  // const showPasswordHandler = () => {
  //   setIsShowPassword(!isShowPassword)
  // }

  return (
    <div
      className={clsx(
        styles.inputBox,
        multiline && styles.textAreaBox,
        useValid.isOutFocus && !!useValid.validateError && styles.error,
        isFocused && styles.focused,
        !!useValid.inputValue && styles.focusedLabel
      )}
    >
      {multiline ? (
        <textarea
          value={useValid.inputValue}
          onChange={useValid.onChange}
          onBlur={onBlurMiddleWare}
          onFocus={() => setIsFocused(true)}
          name={name}
          ref={textArea}
        />
      ) : (
        <input
          value={useValid.inputValue}
          onChange={useValid.onChange}
          onBlur={onBlurMiddleWare}
          onFocus={() => setIsFocused(true)}
          name={name}
          className={clsx(className && className)}
          type="text"
        />
      )}
      <label>
        <p>{label}</p>
        <div className={styles.line} />
      </label>
      {useValid.isOutFocus && useValid.validateError && (
        <span>{useValid.validateError}</span>
      )}
    </div>
  );
};

export default Input;

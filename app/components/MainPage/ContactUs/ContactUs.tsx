"use client";

import clsx from "clsx";
import styles from "./ContactUs.module.scss";
import Button from "@/components/UI-kit/Buttons/Button";
import useValidation from "@/hooks/useValidation/useValidation";
import Input from "@/components/UI-kit/Inputs/Input";
import { useEffect, useState } from "react";
import ButtonLoader from "@/components/UI-kit/Loaders/ButtonLoader";

export const inputsValues = [
  {
    label: "Введите вашу почту",
    placeholder: "Введите вашу почту",
    type: "email",
  },
  {
    label: "Введите telegram",
    placeholder: "Введите telegram",
    type: "text",
  },
  {
    label: "Задайте вопрос",
    placeholder: "Задайте вопрос",
    type: "text",
  },
];

function ContactUs() {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { runCheck, isCheckError, checkValidate, isNoError, formFields } =
    useValidation();

  useEffect(() => {
    if (isNoError) {
      const site = formFields["0"];
      const email = formFields["1"];
      const nickname = formFields["2"];
      const description = formFields["3"];
      const date = new Date().toISOString().replace("T", " ").split(".")[0];
      // handleSendTelegramMessage({ site, email, nickname, description, date });
      setTimeout(() => setIsLoading(false), 300);
    } else {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, [isNoError, formFields]);

  const onSubmitHandler = (e: any) => {
    setIsLoading(true);

    e.preventDefault();
    runCheck();
  };

  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        <div className={styles.textContentBox}>
          <h2>Связаться с нами</h2>
          <p>
            Если у вас есть какие-то вопросы, или вы решили узнать больше про
            наш сервис, вы ответим на все ваши вопросы! Просто напишите нам
          </p>
          <div className={styles.buttonsBox}>
            <Button size="medium" variant="white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00724 3.85654C7.93715 3.37386 7.49571 2.99524 7.00775 3.00005L6.9979 3.00014L3.99844 3.00009C3.44067 3.00087 2.95678 3.52401 3.00328 4.08363C3.93523 12.8174 11.1152 19.9756 19.806 20.9249C20.2207 20.9596 20.6386 20.7099 20.8046 20.3297C20.9521 19.9918 21.0019 19.5147 20.9845 18.8752C20.9769 18.5923 20.9576 18.3063 20.9374 18.0055L20.9314 17.9169C20.9099 17.5942 20.8879 17.2481 20.8879 16.9201C20.8879 16.9118 20.888 16.9036 20.8882 16.8953C20.9004 16.4023 20.5205 15.9522 20.0328 15.8809C18.9993 15.7449 17.9842 15.4917 17.0078 15.1268L17.006 15.1261C16.6563 14.9947 16.219 15.0876 15.9526 15.3496L14.685 16.6172C14.3667 16.9355 13.8749 17.0019 13.4836 16.7794C10.8236 15.2669 8.62114 13.0644 7.10861 10.4044C6.8861 10.0131 6.95248 9.5213 7.2708 9.20299C7.43424 9.03955 7.58738 8.89397 7.73029 8.75811C8.06649 8.4385 8.3461 8.17269 8.57015 7.85466C8.83311 7.4814 8.88599 7.21221 8.76185 6.88196L8.76119 6.8802C8.39607 5.90331 8.14418 4.88861 8.00724 3.85654ZM6.99349 1.00009C8.48421 0.988155 9.77936 2.10355 9.98806 3.58014L9.98931 3.58894C10.1065 4.47492 10.3223 5.34428 10.6345 6.17961C11.0634 7.3222 10.7124 8.28646 10.2052 9.00651C9.93426 9.39105 9.57189 9.76323 9.24673 10.0781C10.4216 11.9167 11.9837 13.4772 13.8237 14.6501L14.5408 13.933L14.5448 13.929C15.3659 13.117 16.6279 12.8477 17.709 13.2538C18.5448 13.566 19.4136 13.7825 20.298 13.8986L20.3076 13.8999C21.7983 14.1102 22.918 15.4269 22.8879 16.9308C22.8884 17.1798 22.9053 17.4592 22.927 17.7834L22.9332 17.8751C22.953 18.1696 22.975 18.4955 22.9838 18.821C23.0028 19.5222 22.9692 20.3702 22.6375 21.1299C22.1266 22.3002 20.8943 23.0328 19.6168 22.9159L19.5999 22.9142C9.96932 21.8677 2.04145 13.9657 1.0135 4.28569L1.01196 4.2701C0.854619 2.52894 2.2709 1.00172 3.99696 1.00009H6.99349Z"
                  fill="#101113"
                />
              </svg>
              <span>+ 7 (000) 000-00-00</span>
            </Button>
            <Button size="medium" variant="white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.44444 13.1739L1 10.8261L22.5 2L18.1111 21L12.5 17M6.44444 13.1739L18.1111 6.91304L9.55556 14.7391M6.44444 13.1739L8.77778 19.4348M9.55556 14.7391L8.77778 19.4348M9.55556 14.7391L12.5 17M8.77778 19.4348L12.5 17"
                  stroke="#101113"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span>@extructor</span>
            </Button>
          </div>
        </div>
        <form onSubmit={onSubmitHandler} className={styles.modalBox}>
          {inputsValues.map((input, key) => (
            <Input
              key={key}
              multiline={key === 2}
              label={input.label}
              placeholder={input.placeholder}
              type={input.type}
              // validation={input.validation}
              isCheckError={isCheckError}
              checkValidate={checkValidate}
              name={String(key)}
              isNoError={isNoError}
              error={error}
            />
          ))}
          <Button size="medium" variant="contained" typeSubmit>
            {isLoading ? <ButtonLoader /> : "Отправить"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

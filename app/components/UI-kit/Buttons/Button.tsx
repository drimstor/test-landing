import clsx from "clsx";
import { ReactNode } from "react";
import s from "./Button.module.scss";

interface iButton {
  children: ReactNode;
  variant: "outlined" | "contained" | "white";
  size: "medium" | "small";
  onClick?: () => void;
  typeSubmit?: boolean;
  error?: boolean;
}

function Button({
  children,
  variant,
  size,
  onClick,
  typeSubmit,
  error,
}: iButton) {
  return (
    <button
      onClick={onClick}
      type={typeSubmit ? "submit" : "button"}
      className={clsx(s.button, s[size], s[variant], error && s.error)}
    >
      {children}
    </button>
  );
}

export default Button;

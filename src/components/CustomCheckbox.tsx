import { InputHTMLAttributes, useState } from "react";
import style from "./custom-checkbox.module.css";

interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

function CustomCheckBox({ checked, ...props }: CustomCheckboxProps) {
  return (
    <label className={style.container}>
      <input type="checkbox" checked={checked} {...props} />
      <span className={style.checkmark}></span>
    </label>
  );
}

export default CustomCheckBox;

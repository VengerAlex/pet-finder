import {FC, HTMLProps, useState} from "react";

import "../styles/login.scss";
import hide from "../assets/icons/hide.svg";
import show from "../assets/icons/show.svg";

interface InputProps extends HTMLProps<HTMLInputElement> {
  isPassword?: boolean
}

export const Input: FC<InputProps> = ( props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const typeInput = isShowPassword ? "text" : "password";

  return (
    <div className="input__container">
      <input
        type={typeInput}
        {...props}
      />

      {props?.isPassword && <span className="login-sign">
        <img
          onClick={() => setIsShowPassword(!isShowPassword)}
          src={`${isShowPassword ? show : hide}`}
          alt="#" />
      </span>}

    </div>
  )
}

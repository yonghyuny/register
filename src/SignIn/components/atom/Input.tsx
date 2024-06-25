import React from "react";
import { CSSProperties } from "react";
import { SIZES } from "../../../css/root";

export type InputProps = {
  type: "text" | "password";
  placeholder: string;
  text: "아이디" | "비밀번호" | "비밀번호 확인" | "이메일" | "인증번호";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, text, onChange }: InputProps) => {
  const spanStyle: CSSProperties = {
    fontSize: SIZES.FONT_SIZE.SMALL,
  };

  return (
    <div>
      <span style={spanStyle}>{text}</span>
      <div>
        <input type={type} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
};

export default Input;

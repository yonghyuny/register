import React from "react";
import { CSSProperties } from "react";

export type InputProps = {
  type: "text" | "password";
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    margin: "10px 0",
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    border: "1px solid #d1d1d1",
    paddingLeft: "10px",
  };

  return (
    <div style={style}>
      <input style={inputStyle} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;

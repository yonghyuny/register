import React from "react";
import { CSSProperties } from "react";

export type SignInBtnProps = {
  text: string;
  Glogo?: string;
};

const SignInBtn = ({ text, Glogo }: SignInBtnProps) => {
  const btnStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    margin: "10px 0",
    borderRadius: "5px",
    backgroundColor: Glogo ? "#ffffff" : "#5e35b1",
    color: Glogo ? "#000000" : "#ffffff",
    border: Glogo ? "1px solid #d1d1d1" : "none",
    cursor: "pointer",
  };

  const imgStyle: CSSProperties = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  };

  return (
    <button style={btnStyle}>
      {Glogo && <img style={imgStyle} src={Glogo} alt="" />}
      {text}
    </button>
  );
};

export default SignInBtn;

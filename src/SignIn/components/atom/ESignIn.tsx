import React from "react";
import { CSSProperties } from "react";
import { SIZES } from "../../../css/root";

export type ESignInProps = {
  text: string;
};

const ESignIn = ({ text }: ESignInProps) => {
  const style: CSSProperties = {
    fontSize: SIZES.FONT_SIZE.SMALL,
    color: "#333",
    textAlign: "center",
    margin: "10px 0",
  };

  return <div style={style}>{text}</div>;
};

export default ESignIn;

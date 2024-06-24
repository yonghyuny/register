import React from "react";
import { CSSProperties } from "react";
import Logo from "../atom/Logo";
import ORDvide from "../atom/ORDivide";
import SignInBtn, { SignInBtnProps } from "../atom/SignInBtn";
import Title, { TitleProps } from "../atom/Title";
import ESignIn, { ESignInProps } from "../atom/ESignIn";

export type LogoTitleGroupProps = {
  titleP: TitleProps;
  contents: SignInBtnProps;
  textP: ESignInProps;
};

const LogoTitleGroup = ({ titleP, contents, textP }: LogoTitleGroupProps) => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  };

  return (
    <div style={style}>
      <Logo />
      <Title {...titleP} />
      <SignInBtn {...contents} />
      <ORDvide />
      <ESignIn {...textP} />
    </div>
  );
};

export default LogoTitleGroup;

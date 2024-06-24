import React from "react";
import { CSSProperties } from "react";
import { LINK } from "../../styles/LINK";
import { MESSAGE } from "../../styles/MESSAGE";
import SignInBtn from "../atom/SignInBtn";

import BottomGroup from "../molecules/BottomGroup";
import LogoTitleGroup from "../molecules/LogoTitleGroup";
import Input from "../atom/Input";
import LinkP from "../atom/LinkP";

const SignIn = () => {
  const style: CSSProperties = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  };

  return (
    <div style={style}>
      <LogoTitleGroup
        titleP={{ title: MESSAGE.TITLE }}
        contents={{
          text: MESSAGE.G_SIGNIN,
          Glogo: `${process.env.PUBLIC_URL}/images/glogo.png`,
        }}
        textP={{ text: MESSAGE.E_SIGNIN }}
      />
      <Input type="text" placeholder={MESSAGE.EMAIL} />
      <Input type="password" placeholder={MESSAGE.PWD} />
      <BottomGroup
        textC={{ text: "Remember me" }}
        textP={{ text: LINK.FORGOT }}
      />
      <SignInBtn text={MESSAGE.SIGNIN} />
      <LinkP text={LINK.ALREADY} />
    </div>
  );
};

export default SignIn;

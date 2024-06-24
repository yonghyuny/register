import React from "react";
import { CSSProperties } from "react";
import { LINK } from "../../styles/LINK";
import { MESSAGE } from "../../styles/MESSAGE";
import SignInBtn from "../atom/SignInBtn";
import Input from "../atom/Input";
import BottomGroup from "../molecules/BottomGroup";
import LogoTitleGroup from "../molecules/LogoTitleGroup";

const SignUp = () => {
  const style: CSSProperties = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    border: "1px solid black",
  };

  return (
    <div style={style}>
      <LogoTitleGroup
        titleP={{ title: MESSAGE.SIGNUP }}
        contents={{
          text: MESSAGE.G_SIGNUP,
          Glogo: `${process.env.PUBLIC_URL}/images/glogo.png`,
        }}
        textP={{ text: MESSAGE.E_SIGNUP }}
      />
      <Input type="text" placeholder={MESSAGE.FNAME} />
      <Input type="text" placeholder={MESSAGE.LNAME} />
      <Input type="text" placeholder={MESSAGE.EMAIL} />
      <Input type="password" placeholder={MESSAGE.PWD} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0",
        }}
      ></div>
      <BottomGroup
        textC={{ text: LINK.TERMS }}
        textP={{ text: LINK.ALREADY }}
      />
      <SignInBtn text={MESSAGE.SIGNUP} />
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn/components/organisms/SignIn";
import SignUp from "./SignIn/components/organisms/SignUp";
import InputBtn from "./SignIn/components/molecules/InputBtn";
import { MESSAGE } from "./SignIn/styles/MESSAGE";
import SubmitBtn from "./SignIn/components/atom/SubmitBtn";
import LogoTitle from "./SignIn/components/molecules/LogoTitle";
import ORDivide from "./SignIn/components/atom/ORDivide";
import SnsBtnGroup from "./SignIn/components/molecules/SNSBtnGroup";

function App() {
  const handleChange = () => {
    // 기능구현
  };

  return (
    <div>
      <LogoTitle />
      <InputBtn
        input={{
          text: "아이디",
          type: "text",
          placeholder: MESSAGE.ID,
          onChange: handleChange,
        }}
        btn={{ text: "이메일 인증", onChange: handleChange }}
      />
      <SubmitBtn text={MESSAGE.SIGNIN} onClick={handleChange} />
      <ORDivide />
      <SnsBtnGroup />
      {/* <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;

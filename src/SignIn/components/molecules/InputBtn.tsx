import { CSSProperties } from "react";
import DoubleCheck, { DoublcCheckProps } from "../atom/DoubleCheck";
import Input, { InputProps } from "../atom/Input";

type InputBtnProps = {
  btn: DoublcCheckProps;
  input: InputProps;
};

const InputBtn = ({ btn, input }: InputBtnProps) => {
  const style: CSSProperties = {
    display: "flex",
  };

  return (
    <div style={style}>
      <Input {...input} />
      <DoubleCheck {...btn} />
    </div>
  );
};

export default InputBtn;

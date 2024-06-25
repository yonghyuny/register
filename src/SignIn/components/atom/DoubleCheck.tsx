import { CSSProperties } from "react";

export type DoublcCheckProps = {
  text: "중복 확인" | "이메일 인증" | "인증 확인";
  onChange: () => void;
  backgroundColor?: string;
  color?: string;
};

const DoubleCheck = ({
  text,
  onChange,
  backgroundColor = "gray",
  color = "black",
}: DoublcCheckProps) => {
  const style: CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <>
      <button style={style} onClick={onChange}>
        {text}
      </button>
    </>
  );
};
export default DoubleCheck;

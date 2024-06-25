import { MESSAGE } from "../../styles/MESSAGE";
import Logo from "../atom/Logo";
import Title from "../atom/Title";

const LogoTitle = () => {
  return (
    <>
      <Logo />
      <Title title={MESSAGE.TITLE} />
    </>
  );
};

export default LogoTitle;

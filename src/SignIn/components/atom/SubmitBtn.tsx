type SubmitBtnProps = {
  text: string;
  onClick: () => void;
};

const SubmitBtn = ({ text, onClick }: SubmitBtnProps) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export default SubmitBtn;

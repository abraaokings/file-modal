import IconButton from "../assets/images/iconButton";
import ButtonContainer from "../styles/Home.styles";

const Button = ({ setModal }) => {
  return (
    <>
      <ButtonContainer onClick={() => setModal(true)}>
        <IconButton />
        <span className="label">Archive</span>
      </ButtonContainer>
    </>
  );
};

export default Button;

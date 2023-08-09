import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px 8px 16px;
  gap: 8px;
  height: 40px;
  width: 128px;
  border: none;
  background: #056bfa27;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background: #056bfa49;
  }

  .label {
    margin-top: 1px;
    font-size: 19px;
    line-height: 22px;
    color: #056dfa;
    font-family: sans-serif;
    letter-spacing: 1px;
  }
`;

export default ButtonContainer;

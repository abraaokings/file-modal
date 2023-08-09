import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  background: #ffffff;
  width: 747px;
  height: 634px;
  padding: 23px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;

  .input-container {
    display: flex;
    justify-content: space-between;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .input-wrapper > input[type="text"] {
    border: none;
    outline: none;
    background: none;
    width: 600px;
  }

  .input-wrapper > input[type="text"]::placeholder {
    font-size: 16px;
    color: #999999;
  }

  .input-command {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px 5px;
    background: #f2f2f2;
    border-radius: 5px;
  }
  .input-command > span {
    color: #868686;
    font-size: 12px;
  }
  .qa-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .qa-container {
    display: flex;
    gap: 15px;
    padding: 15px 0 20px;
  }

  .qa-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
  }
  .qa-number-file {
    padding: 3px 7px;
    border-radius: 7px;
    background: #f2f2f2;
    color: #868686;
    font-size: 10px;
  }
  .modal-content {
    display: grid;
    grid-template-columns: 151px 1fr;
  }
  .icon-close-modal {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 20px 0;
    cursor: pointer;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

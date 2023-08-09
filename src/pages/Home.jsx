import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <Button setModal={setModal} />
    </>
  );
};

export default Home;

import ModalRegistration from "@/components/Molecules/RegistrationComp";
import { routeName } from "@/constants";
import { useModal } from "@/sideEffect";
import React from "react";
import { useNavigate } from "react-router";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { handleShowModal } = useModal();
  const navigation = useNavigate();

  const handleRegister = () => {
    handleShowModal({ content: <ModalRegistration /> });
  };

  const handleAbout = () => {
    navigation(routeName.About);
  };

  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={handleAbout}>About</button>
      </div>
      <div>
        <button onClick={handleRegister}>Show modal</button>
      </div>
    </div>
  );
};

export default Home;

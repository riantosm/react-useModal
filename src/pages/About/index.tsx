import ModalRegistration from "@/components/Molecules/RegistrationComp";
import { routeName } from "@/constants";
import { useModal } from "@/sideEffect";
import React from "react";
import { useNavigate } from "react-router";

interface AboutProps {}

const About = (props: AboutProps) => {
  const { handleShowModal } = useModal();
  const navigation = useNavigate();

  const handleRegister = () => {
    handleShowModal({ content: <ModalRegistration /> });
  };

  const handleHome = () => {
    navigation(routeName.Home);
  };

  return (
    <div>
      <div>
        <button onClick={handleHome}>Home</button>
      </div>
      <p>About</p>
      <div>
        <button onClick={handleRegister}>Show modal</button>
      </div>
    </div>
  );
};

export default About;

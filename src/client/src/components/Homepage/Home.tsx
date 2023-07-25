import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <div onClick={() => nav("/portfolio")}>
        <h2>Next page</h2>
      </div>
    </>
  );
};

export default Home;

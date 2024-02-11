import React, { useState } from "react";

const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[0.2] xl:flex-[0.4]"
        } min-h-screen 
      max-h-screen relative text-white p-2 bg-secondary`}
      >
        Home
      </div>
      <div></div>
    </>
  );
};

export default Home;

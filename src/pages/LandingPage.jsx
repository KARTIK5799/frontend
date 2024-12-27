import hero from "../assets/hero.jpg";
import { useState } from "react";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="w-screen h-auto bg-gray-900 flex flex-col items-center justify-center gap-10 p-10">
      {/* Hero Section */}
      <section className="h-full min-h-[90vh] relative flex justify-between flex-col items-center overflow-hidden rounded-3xl w-full bg-white">
        <Header />
        <img
          src={hero}
          alt=""
          className="absolute z-0 w-full h-full object-cover transform scale-x-[-1]"
        />
      </section>

      {/* Second Section */}
      <section className="h-full min-h-[90vh] rounded-3xl w-full bg-yellow-200">
        {/* Content for the second section */}
      </section>
    </div>
  );
};

export default LandingPage;

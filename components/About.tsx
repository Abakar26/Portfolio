import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As an innovative full-stack web developer with almost 3 years of
          experience, I am proficient in a range of technologies, including
          JavaScript, Ruby, Ruby on Rails, ReactJS, Postgres and
          MongoDB databases. With a strong commitment to teamwork
          and a keen attention to detail, I am eager to leverage my
          technical skills and contribute to the team&apos;s success.
          <br />
          <br />
          To pursue a challenging career with dedication and utilize my
          skills, education and efficiency to the fullest in a professional
          organizational environment.
        </p>
      </div>
    </section>
  );
};

export default About;

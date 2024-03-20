import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Deaglo.png"
                height={150}
                width={150}
                alt="Dealgo Project"
                className=" object-contain bg-white rounded-md"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Dealgo</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://ontab.me/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ontab_logo.png"
                height={150}
                width={150}
                alt="Ontab"
                className=" object-contain bg-white rounded-md"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">ontab</p>
                <p className="text-gray-500 text-[10px]">
                  Ontab Credit is a web-based application designed to simplify the process of applying for a loan
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/adaptec.svg"
                height={150}
                width={150}
                alt="adapticLogo"
                className=" object-contain rounded-md"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Adaptic Solutions
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Adaptic Solutions website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/window_logo.svg"
                height={150}
                width={150}
                alt="Payoasis"
                className=" object-contain bg-white rounded-md"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Window</p>
                <p className="text-gray-500 text-[10px]">
                  Window is your customized search engine for apparel shopping.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
// import Image from "next/image";
const card = (props) => {
  const { Title, Description, Image } = props;
  return (
    <>
      <div className="h-auto w-auto  shadow-2xl px-5 py-3 shadow-blue-100 rounded-xl flex items-center justify-centers flex-col mt-44">
        <div className="h-32 w-44 bg-red-500">
          <image src={Image} alt="" className="h-52 w-80  rounded-lg " />
        </div>
        <div>
          <p className="text-center py-6 text-xl font-semibold text-pri">
            {Title}
          </p>
          <p className="text-center   text-gray-500 ">
            {Description}
            <br /> praesentium porro excepturi, <br /> saepe.
          </p>
        </div>
        <button className="bg-blue-600 rounded-xl text-white mt-4 px-6 py-3">
          Click here
        </button>
      </div>
    </>
  );
};

export default card;

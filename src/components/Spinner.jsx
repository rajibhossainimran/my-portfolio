import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
     <CirclesWithBar
  height="100"
  width="100"
  color="red"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="red"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  );
};

export default Spinner;
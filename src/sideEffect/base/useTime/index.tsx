import moment from "moment";
import React, { useEffect, useState } from "react";

interface useTimeProps {}

const useTime = (props?: useTimeProps) => {
  const [myTime, setMyTime] = useState(moment().format("HH:mm:ss"));

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  });

  const tick = () => {
    setMyTime(moment().format("HH:mm:ss"));
  };

  return myTime;
};

export default useTime;

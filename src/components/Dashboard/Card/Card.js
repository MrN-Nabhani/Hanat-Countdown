import React, { useState, useEffect } from "react";
import CardSection, { CardTitle, CardTime } from "./StyledCard.js";
import moment from "moment";

function Card({ title, finishTime }) {
  const [countdown, setCountdown] = useState({
    time: moment(),
    yearsLeft: 0,
  });

  useEffect(() => {
    const interval = window.setInterval(function () {
      const then = moment(finishTime);
      const now = moment();

      const yearsLeft = then.diff(now, "years");
      const timeUntil = then.diff(now);
      const time = moment(timeUntil);
      setCountdown({ time, yearsLeft });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CardSection>
      <CardTitle>{title}</CardTitle>
      <CardTime>
        {countdown.yearsLeft} Years &nbsp;
        {countdown.time.format("MM")} Months &nbsp;
        {countdown.time.format("DD")} Days &nbsp;
        {countdown.time.format("HH:mm:ss")}
      </CardTime>
    </CardSection>
  );
}

export default Card;

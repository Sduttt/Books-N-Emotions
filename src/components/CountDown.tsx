"use client"
import React, { useEffect, useState } from 'react'


import Countdown from 'react-countdown';

const endDate = new Date("2023-09-01");

const CountDown = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // Set the date only on the client side
    setDate(endDate);
  }, []);

  return (
    date ? (
      <Countdown
        className="my-6 font-bold text-5xl text-yellow-500"
        date={date}
      />
    ) : null
  );
};

export default CountDown;

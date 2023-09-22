'use client'
import React, { useState, useEffect } from 'react';

function CountdownSection() {
  const [countdown, setCountdown] = useState('');

  // Define your enrollment deadline date and time
  const enrollmentDeadline = new Date('2023-12-31T23:59:59').getTime();

  // Function to update the countdown
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = enrollmentDeadline - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setCountdown('Enrollment Closed');
    }
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white p-4">
      <div className="text-3xl font-semibold text-center">Enrollment Deadline Countdown</div>
      <div className="text-4xl font-bold border p-10 text-center mt-10 transition duration-500 hover:scale-105 rounded">{countdown}</div>
    </div>
  );
}

export default CountdownSection;

import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const formattedMinutes = String(mins).padStart(2, "0");
  const formattedSeconds = String(secs).padStart(2, "0");

  useEffect(
    function () {
      const timerId = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(timerId);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {formattedMinutes}:{formattedSeconds}
    </div>
  );
}

export default Timer;

// import "./../../styles/pomodoro.css";
import { useTimer } from "react-timer-hook";

const Pomodoro = () => {
  const time = new Date();
  const expiryTimestamp = time.setMinutes(time.getMinutes() + 25);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className=" bg-pomodoro  col p-1 ">
      <div className="d-flex flex-column gap-5 m-3 bg-pomodoroaccent border-pomodoro py-10px">
        <div className="d-flex gap-2 flex-column">
          <button className="text-pomodoro text-shadow-sm text-2rem">
            Timer
          </button>
          <button
            className="text-pomodoro text-shadow-sm text-1rem "
            onClick={() => {
              const time = new Date();
              time.setMinutes(time.getMinutes() + 15);
              restart(time);
            }}
          >
            Short Duration
          </button>
          <button
            className="text-pomodoro text-shadow-sm text-1rem"
            onClick={() => {
              const time = new Date();
              time.setMinutes(time.getMinutes() + 25);
              restart(time);
            }}
          >
            Long Duration
          </button>
        </div>
        <div className="text-center">
          <button
            className={
              "text-pomodoro text-shadow-sm text-4rem rounded-4 transition-all " +
              (isRunning ? "bg-active" : "bg-accent")
            }
            onClick={() => {
              if (isRunning === true) {
                pause();
              } else {
                start();
              }
            }}
          >
            {" "}
            {minutes}:{seconds}
          </button>
        </div>
        <button
          className="text-pomodoro text-shadow-sm "
          onClick={() => start()}
        >
          START
        </button>
      </div>
    </div>
  );
};
export default Pomodoro;

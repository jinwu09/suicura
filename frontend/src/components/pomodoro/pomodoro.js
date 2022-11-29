// import "./../../styles/pomodoro.css";

const Pomodoro = () => {
  return (
    <div className=" bg-pomodoro  col p-1 ">
      <div className="d-flex flex-column gap-5 m-3 bg-pomodoroaccent border-pomodoro py-10px">
        <div className="d-flex gap-2 flex-column">
          <button className="text-pomodoro text-shadow-sm text-2rem">
            Timer
          </button>
          <button className="text-pomodoro text-shadow-sm text-1rem ">
            Short Break
          </button>
          <button className="text-pomodoro text-shadow-sm text-1rem">
            Long Break
          </button>
        </div>
        <div className="text-center">
          <p className="text-pomodoro text-shadow-sm text-4rem">25:00</p>
        </div>
        <button className="text-pomodoro text-shadow-sm ">START</button>
      </div>
    </div>
  );
};
export default Pomodoro;

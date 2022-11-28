import "./../../styles/pomodoro.css";

const Pomodoro = () => {
  return (
    <div className=" bg-pomodoro w-pomodoro flex-shrink-1 flex-basis-300px p-1 ">
      <div className="d-flex flex-column gap-5 m-3 bg-pomodoroaccent border-pomodoro py-10px">
        <div className="d-flex gap-2 flex-column">
          <button className="text-pomodoro text-shadow-sm">Timer</button>
          <button className="text-pomodoro text-shadow-sm ">Short Break</button>
          <button className="text-pomodoro text-shadow-sm">Long Break</button>
        </div>
        <div className="text-center">
          <p className="text-pomodoro text-shadow-sm">25:00</p>
        </div>
        <button className="text-pomodoro text-shadow-sm">START</button>
      </div>
    </div>
  );
};
export default Pomodoro;

import "./pomodoro.scss";

const Pomodoro = () => {
  return (
    <div className=" bg-pomodoro w-300px flex-shrink-1 flex-basis-300px ">
      <div className="d-flex flex-column m-3 bg-pomodoroaccent border-pomodoro">
        <button className="text-pomodoro text-shadow-sm">Timer</button>
        <button className="text-pomodoro text-shadow-sm ">Short Break</button>
        <button className="text-pomodoro text-shadow-sm">Long Break</button>
        <div className="text-center">
          <p className="text-pomodoro text-shadow-sm">25:00</p>
        </div>
        <button className="text-pomodoro text-shadow-sm">START</button>
      </div>
    </div>
  );
};
export default Pomodoro;

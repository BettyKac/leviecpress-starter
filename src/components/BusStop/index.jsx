import './style.css';

export const BusStop = ({ name, stop, time }) => {
  return (
    <div className="stops">
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">{name}</div>
          <div className="bus-stop__station">{stop}</div>
        </div>
        <div className="bus-stop__departure">{time}</div>
      </div>
    </div>
  );
};

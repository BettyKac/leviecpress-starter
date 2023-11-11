import { BusStop } from '../BusStop';
import './style.css';
export const JourneyDetail = ({ journey }) => {
  console.log(journey);
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.name}
            stop={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    </div>
  );
};

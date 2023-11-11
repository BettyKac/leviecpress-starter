import { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
export const ReservationPage = () => {
  let { id } = useParams();
  const [reservation, setReservation] = useState(null);
  useEffect(() => {
    const ticket = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
      );
      const data = await response.json();
      const ticketId = data.results;
      setReservation(ticketId);
    };
    ticket();
  }, []);
  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservation ? reservation.reservationId : 'Načítání...'}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>{reservation ? reservation.date : null}</p>
          <p>{reservation ? reservation.fromCity.name : null}, {reservation ? reservation.fromCity.time: null}</p>
          <p>{reservation ? reservation.toCity.name : null}, {reservation ? reservation.toCity.time : null}</p>
          <p>{reservation ? reservation.seatNumber : null}</p>
        </div>
      </div>
    </div>
  );
};

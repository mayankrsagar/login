import React, { useState } from 'react';

import { useSnackbar } from 'notistack';

import Button from '../Button/Button';

const SeatSelection = () => {
  const [seats] = useState([
    { seat: "VIP Section", gridValue: 5 },
    { seat: "General Section", gridValue: 6 },
    { seat: "Economic Section", gridValue: 8 },
  ]);

  const { enqueueSnackbar } = useSnackbar();
  const [booked, setBooked] = useState([]);

  // Function to handle seat booking or deselection
  const booking = (row, column,seatName) => {
    const seatKey = `${seatName}-${row}-${column}`;

    // Check if seat is already booked
    if (booked.includes(seatKey)) {
      // Deselect the seat
      setBooked((prev) => prev.filter((seat) => seat !== seatKey));
      enqueueSnackbar(`Seat ${seatKey} deselected.`, { variant: "info" });
    } else {
      // Prevent exceeding the 5-seat booking limit
      if (booked.length >= 5) {
        enqueueSnackbar("You cannot book more than 5 seats.", { variant: "error" });
        return;
      }
      // Select the seat
      setBooked((prev) => [...prev, seatKey]);
      enqueueSnackbar(`Seat ${seatKey} booked successfully!`, { variant: "success" });
    }
  };

  const makeGrid = (number,seatName) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${number}, 1fr)`,
        gap: "5px",
      }}
    >
      {Array.from({ length: number }, (_, rowIndex) =>
        Array.from({ length: number }, (_, colIndex) => {
          const seatKey = `${seatName}-${rowIndex + 1}-${colIndex + 1}`;
          const isSelected = booked.includes(seatKey);
          return (
            <Button
              key={seatKey}
              row={rowIndex + 1}
              seatName={seatName}
              column={colIndex + 1}
              booking={booking}
              isSelected={isSelected} // Pass selection status
            />
          );
        })
      )}
    </div>
  );

  return (
    <React.Fragment>
      <div>
        {seats.map((ele) => (
          <div key={ele.seat} style={{ marginBottom: "20px" }}>
            <h2>{ele.seat}</h2>
            {makeGrid(ele.gridValue,ele.seat)}
          </div>
        ))}
      </div>

      <div>
        <h3>Booked Seats:</h3>
        {booked.length > 0 ? (
          booked.map((seat, index) => <div key={index}>{seat}</div>)
        ) : (
          <p>No seats booked yet.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default SeatSelection;

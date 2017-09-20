import React from 'react';
import { days, findFinish, findStart, sortOccurences, } from './dates';

const Day = ({ day, events, }) => {
  const sorted = day ? [ ...events, ].sort(sortOccurences(day)) : events;

  return day ? (
    <div className="dayDiv">
      <p className="dateMarker">{day.getDate()}</p>
      <ul>
        {sorted.map(e => (
          <li key={e.name}>
            <div>
              <h3>{e.name}</h3>
              <p>
                {findStart(day)(e) &&
                  `${new Date(findStart(day)(e)).getHours()}:${new Date(
                    findStart(day)(e)
                  ).getMinutes()}`}
                –{findFinish(day)(e) &&
                  `${new Date(findFinish(day)(e)).getHours()}:${new Date(
                    findFinish(day)(e)
                  ).getMinutes()}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div />
  );
};

export default Day;

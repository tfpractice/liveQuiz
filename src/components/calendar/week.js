import React from 'react';
import Day from './day';

import { days, occursOn, weekFind, } from './dates';

const events = window.apiResponse.items;

const Week = ({ week, }) => (
  <tr>
    {days.map(weekFind(week)).map((d, i) => (
      <td key={d || i}>
        <Day day={d} events={events.filter(occursOn(d))} />
      </td>
    ))}
  </tr>
);

export default Week;

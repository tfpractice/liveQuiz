import React from 'react';

// const { March, } = require('./dates');
// import { March, } from './dates';
import {
  days,
  fallsOn,
  getWDay,
  March,
  weekFind,
  weekMap,
  weeks,
} from './dates';

const Week = ({ week, }) => {
  console.log('days.findweek', days.map(weekFind(week)));
  return (
    <tr>
      {days.map(weekFind(week)).map((d, i) => {
        console.log('d', d);
        return <td key={d || i}>{d && d.toString()}</td>;
      })}
    </tr>
  );
};

export default Week;

import React from 'react';
import Week from './week';
import { days, weeks, } from './dates';

const Month = ({ events, }) => (
  <div className="monthDiv">
    <h1>March 2016</h1>
    <table>
      {[ ...Array(7).keys(), ].map(i => (
        <colgroup key={i}>
          <col style={{ backgroundColor: 'rgba(0,0,0,0.15)', }} />
          <col span="1" />
        </colgroup>
      ))}
      <tbody>
        <tr>{[ ...days, ].map(d => <th key={d}>{d}</th>)}</tr>
      </tbody>
      <tbody>{weeks.map((w, i) => <Week key={i} week={w} />)}</tbody>
    </table>
  </div>
);

export default Month;

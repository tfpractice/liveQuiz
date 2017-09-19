import React from 'react';
import Week from './week';

import { days, fallsOn, getWDay, March, weekMap, weeks, } from './dates';

const Month = props => (
  <table>
    {[ ...Array(7).keys(), ].map(i => (
      <colgroup key={i}>
        <col style={{ backgroundColor: '#0f0', }} />
        <col span="1" />
      </colgroup>
    ))}
    <tr>{[ ...days, ].map(d => <th key={d}>{d}</th>)}</tr>
    {weeks.map((w, i) => <Week key={i} week={w} />)}
  </table>
);

export default Month;

// export default Month;/

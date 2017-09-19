const date = y => m => d => new Date(y, m, d);

export const March = [ ...Array(32).keys(), ].slice(1).map(date(2016)(2));
export const days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];
export const getWDay = date => date.toString().slice(0, 3);
export const fallsOn = weekday => date => getWDay(date) == weekday;

export const getDays = wDay => March.filter(fallsOn(wDay));
export const weekFind = week => wDay => week.find(fallsOn(wDay));

export const weekMap = days.map(getDays);

export const weeks = [
  March.slice(0, 6),
  March.slice(6, 13),
  March.slice(13, 20),
  March.slice(20, 27),
  March.slice(27),
];

// weeks.map(w=>w.reduce((acc, next)=>
// acc.set
// ))

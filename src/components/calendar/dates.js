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
const init = { start: Date.now(), finish: Date.now(), };

export const getEventOuccurences = ({ occurrences = [], }) => occurrences;
export const getStart = ({ start, } = init) => new Date(start);
export const getFinish = ({ finish, } = init) => new Date(finish);
export const sameMonth = d0 => d1 => d0.getMonth() === d1.getMonth();

export const sameDay = d0 => d1 => d0.getDate() === d1.getDate();
export const eqDate = d0 => d1 =>
  [ sameDay(d0), sameMonth(d0), ].every(f => f(new Date(d1)));

export const startsOn = d => evt =>
  evt.occurrences.map(getStart).some(eqDate(d));

export const endsOn = d => evt =>
  evt.occurrences.map(getFinish).some(eqDate(d));

export const findStart = d => evt =>
  evt.occurrences.map(getStart).find(eqDate(d));
export const findFinish = d => evt =>
  evt.occurrences.map(getFinish).find(eqDate(d));

export const occursOn = d => evt =>
  !d ? [] : [ startsOn(d), endsOn(d), ].some(f => f(evt));

export const sortOccurences = d => (a, b) =>
  findStart(d)(a).getHours() - findStart(d)(b).getHours();

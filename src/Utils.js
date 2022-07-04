import Moment from 'moment';


export function formatAbn(abn) {
  return `${abn.substring(0, 2)} ${abn.substring(2, 5)} ${abn.substring(5, 8)} ${abn.substring(8)}`
}

export function formatDate(date, pattern) {
  return Moment(date).format(pattern);
}
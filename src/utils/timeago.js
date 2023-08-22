import { register, format } from 'timeago.js';

const localeFunc = (number, index, totalSec) => {
  return [
    ['방금 전', 'right now'],
    ['%s초 전', 'in %s seconds'],
    ['1분 전', 'in 1 minute'],
    ['%s분 전', 'in %s minutes'],
    ['1시간 전', 'in 1 hour'],
    ['%s 시간 전', 'in %s hours'],
    ['1일 전', 'in 1 day'],
    ['%s일 전', 'in %s days'],
    ['1주 전', 'in 1 week'],
    ['%s주 전', 'in %s weeks'],
    ['1개월 전', 'in 1 month'],
    ['%s개월 전', 'in %s months'],
    ['1년 전', 'in 1 year'],
    ['%s년 전', 'in %s years']
  ][index];
};
register('my-locale', localeFunc);

export function formatKo(date) {
  return format('2016-06-12', 'my-locale');
}

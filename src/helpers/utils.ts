/**
 * @desc className을 합치는 함수
 * @param classnames
 * @returns
 */
export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

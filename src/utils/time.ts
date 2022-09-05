export const getTime = (
  num: 1 | 7 | 15
): { startTime: number; endTime: number } => {
  return {
    startTime: parseInt(Date.now() / 1000 - num * 24 * 60 * 60 + ""),
    endTime: parseInt(Date.now() / 1000 + ""),
  };
};

export type MinAndMaxDates = { min: number; max: number };

export const getMinDateMillisFromJsMinDate = (min: Date): number => {
  const newMin = new Date(min);
  newMin.setHours(0);
  newMin.setMinutes(0);
  return newMin.getTime();
};

export const getMaxDateMillisFromJsMaxDate = (max: Date): number => {
  const newMax = new Date(max);
  newMax.setHours(23);
  newMax.setMinutes(59);
  return newMax.getTime();
};

export const getMinAndMaxDatesMillisFromJsDates = (
  min: Date,
  max: Date,
): MinAndMaxDates => ({
  min: getMinDateMillisFromJsMinDate(min),
  max: getMaxDateMillisFromJsMaxDate(max),
});

export const getMinDateFromMillis = (millis: number): Date => {
  const newMin = new Date(millis);
  newMin.setHours(0);
  newMin.setMinutes(0);
  return newMin;
};

export const getMaxDateFromMillis = (millis: number): Date => {
  const newMax = new Date(millis);
  newMax.setHours(23);
  newMax.setMinutes(59);
  return newMax;
};

export const getMinAndMaxJsDatesFromDates = ({
  min,
  max,
}: MinAndMaxDates): {
  min: Date;
  max: Date;
} => ({
  min: getMinDateFromMillis(min),
  max: getMaxDateFromMillis(max),
});

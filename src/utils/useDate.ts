import { format } from 'date-fns';

export const formatTimeToDate = (time: number, split = '/' as string): string =>
  format(new Date(time * 1e3), `yyyy${split}MM${split}dd`);

export const formatDateToTime = (date: string): number => Math.floor(Number(new Date(date)) / 1e3);

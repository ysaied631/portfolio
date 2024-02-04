import { ReactNode } from 'react';

export interface CardInfo {
  title: ReactNode | string;
  body: ReactNode | string;
  time?: string;
}

export const workEducationHistory: CardInfo[] = [
  {
    title: 'Belfast Royal Academy',
    body: '',
  },
  {
    title: "Queen's University Belfast",
    body: '',
  },
  {
    title: 'MPS Data - Engineer',
    body: '',
  },
  {
    title: 'MPS Data - Senior Engineer',
    body: '',
  },
];

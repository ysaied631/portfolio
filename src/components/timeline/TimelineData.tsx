import React, { ReactNode } from 'react';

export interface CardInfo {
  title: ReactNode | string;
  body: ReactNode | string;
  time?: string;
}

export const workEducationHistory: CardInfo[] = [
  {
    title: 'Belfast Royal Academy',
    body: (
      <div className="flex flex-col">
        <span>Software Systems Development - (A)</span>
        <span>Technology & Design - (A)</span>
        <span>Math - (A)</span>
      </div>
    ),
  },
  {
    title: "Queen's University Belfast",
    body: (
      <div className="flex flex-col">
        <span>Software and Electronic Systems Engineering</span>
        <span>BENG - 2:1</span>
      </div>
    ),
    time: '2019-2022',
  },
  {
    title: 'MPS Data - Engineer',
    body: 'Started in small team working on an app utilising .NET, VueJS, MySQL.',
    time: 'Jul 2021',
  },
  {
    title: 'MPS Data - Senior Engineer',
    body: 'Started leading a team working on a NextJS, GraphQL and a range of data sources.',
    time: 'Nov 2022',
  },
];

import React from 'react';
import classNames from 'classnames';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setDirection: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

const Pagination = ({ page, setPage, setDirection }: PaginationProps) => {
  const totalPages = 4;

  return (
    <div>
      <nav>
        <ol className="flex flex-col gap-2 text-center">
          {[...Array(totalPages).keys()].map((i) => (
            <li
              key={i.toString()}
              onClick={() => {
                setDirection(page < i ? 'asc' : 'desc');
                setPage(i);
              }}
              className={classNames({
                'cursor-pointer': true,
                'border-b-2 border-white': page === i,
              })}
            >
              0{i + 1}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Pagination;

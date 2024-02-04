import React from 'react';
import Contact from './Contact';
import Pagination from './Pagination';

interface SidebarProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setDirection: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

const Sidebar = ({ page, setPage, setDirection }: SidebarProps) => {
  return (
    <div className="flex h-full max-w-fit flex-col">
      <div className="h-1/2">
        <Contact />
      </div>
      <div className="hidden h-1/3 md:block">
        <Pagination page={page} setPage={setPage} setDirection={setDirection} />
      </div>
    </div>
  );
};

export default Sidebar;

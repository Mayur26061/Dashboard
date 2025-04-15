import React, { FC } from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";

interface tProps {
  className?: string;
}

const Sidebar: FC<tProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* Main sidebar content */}
        <AccountToggle />
        <Search />
      </div>
      {/* TODO Plan Toggle */}
    </div>
  );
};

export default Sidebar;

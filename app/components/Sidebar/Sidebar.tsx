import React, { FC } from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";

interface tProps {
  className?: string;
}

const Sidebar: FC<tProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
      <RouteSelect/>
      </div>
      <Plan/>
    </div>
  );
};

export default Sidebar;

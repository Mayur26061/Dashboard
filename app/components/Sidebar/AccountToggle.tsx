import React from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-4 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <Image
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          width={0}
          height={0}
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-semibold block">
            Mayurrajsinh Rathod
          </span>
          <span className="text-xs block text-stone-500">mrsr@odoo.com</span>
        </div>
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
      </button>
    </div>
  );
};

export default AccountToggle;

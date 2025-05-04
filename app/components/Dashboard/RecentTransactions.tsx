import React, { FC } from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

const RecentTransactions = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign />
          Recent Transactions
        </h3>
        <button className="text-sm hover:text-violet-500 hover:underline">
          See all
        </button>
      </div>
      <table className="table-auto w-full">
        <TableHead />
        <tbody className="">
          <TableRow
            cid="#48149"
            price="$9.75"
            sku="Pro 1 Month"
            date="Aug 2nd"
          />
          <TableRow
            cid="#41192"
            price="$22.25"
            sku="Pro 3 Month"
            date="Aug 2nd"
          />
          <TableRow
            cid="#44256"
            price="$94.75"
            sku="Pro 2 Year"
            date="Aug 1st"
          />
          <TableRow cid="#41295" price="$9.44" sku="Pro 1 Year" date="Jul 31" />
          <TableRow
            cid="#40986"
            price="$9.75"
            sku="Pro 1 Month"
            date="Aug 31"
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

interface tbodyProps {
  cid: string;
  sku: string;
  date: string;
  price: string;
}
const TableRow: FC<tbodyProps> = ({ cid, sku, date, price }) => {
  return (
    <tr className=" text-sm odd:bg-stone-100">
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {cid} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="p-1.5">
        <button className="p-1.5 hover:bg-stone-200 transform-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};
export default RecentTransactions;

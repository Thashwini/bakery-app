/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { useState } from "react";
import get from "lodash.get";
import { ChevronLeft, ChevronRight } from "../icons/Icons";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  columns: Array<IColumnType<T>>;
}

const CustomTable = <T,>({ data, columns }: Props<T>): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const nPage = data != null ? Math.ceil(data.length / recordsPerPage) : 0;
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const headers = columns.map((column, index) => {
    return (
      <th key={`headCell-${index}`} className="!z-0">
        {column.title}
      </th>
    );
  });

  const rows =
    records?.length === 0 ? (
      <tr>
        <td
          colSpan={4}
          className="text-center text-xs md:text-sm lg:text-base xl:text-lg"
        >
          "No data"
        </td>
      </tr>
    ) : (
      records.map((row, index) => {
        return (
          <tr key={`row-${index}`}>
            {columns.map((column, index2) => {
              const value = get(row, column.key);
              return (
                <td
                  key={`cell-${index2}`}
                  className="bg-white text-xs md:text-sm lg:text-base xl:text-lg"
                >
                  {column.render != null ? column.render(column, row) : value}
                </td>
              );
            })}
          </tr>
        );
      })
    );

  const changePrev = (): void => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeNext = (): void => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (n: number): void => {
    setCurrentPage(n);
  };

  return (
    <>
      <table className="table w-full">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div className="flex justify-end items-center">
        <nav className="flex justify-end my-6">
          <li
            onClick={changePrev}
            className="list-none relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
          >
            <ChevronLeft />
          </li>
          {numbers.map((n, i) => (
            <li
              key={i}
              className={`list-none relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ${
                currentPage === n ? "ring-1 ring-inset ring-primary" : ""
              } hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer`}
              onClick={() => {
                changeCurrentPage(n);
              }}
            >
              {n}
            </li>
          ))}
          <li
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
            onClick={changeNext}
          >
            <ChevronRight />
          </li>
        </nav>
      </div>
    </>
  );
};

export default CustomTable;

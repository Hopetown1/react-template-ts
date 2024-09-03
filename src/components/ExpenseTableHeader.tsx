import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, ArrowUpDownIcon } from 'lucide-react';
import { SortConfig } from '../hooks/useSortableData';

interface ExpenseTableHeaderProps {
  requestSort: (key: string) => void;
  sortConfig: SortConfig | null;
}

export const ExpenseTableHeader: React.FC<ExpenseTableHeaderProps> = ({ requestSort, sortConfig }) => {
  const headers = ['Date', 'Merchant', 'Amount', 'Category', 'Description', 'Status'];

  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        {headers.map((header) => (
          <th
            key={header}
            className="py-3 px-6 text-left cursor-pointer hover:bg-gray-300 transition-colors duration-200"
            onClick={() => requestSort(header.toLowerCase())}
          >
            <div className="flex items-center justify-between">
              <span>{header}</span>
              <div className="flex items-center ml-2">
                {sortConfig?.key === header.toLowerCase() ? (
                  sortConfig.direction === 'ascending' ? (
                    <ChevronUpIcon size={16} className="text-[#051C2C]" />
                  ) : (
                    <ChevronDownIcon size={16} className="text-[#051C2C]" />
                  )
                ) : (
                  <ArrowUpDownIcon size={16} className="text-gray-400" />
                )}
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
  
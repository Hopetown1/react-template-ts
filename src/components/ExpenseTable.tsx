import React, { useState } from 'react';
import { ExpenseTableHeader } from './ExpenseTableHeader';
import { ExpenseTableRow } from './ExpenseTableRow';
import { SearchBar } from './SearchBar';
import { DateRangeFilter } from './DateRangeFilter';
import { ExportCSV } from './ExportCSV';
import { useExpenses } from '../hooks/useExpenses';
import { useSortableData } from '../hooks/useSortableData';
import { LoadingSpinner } from './LoadingSpinner';

export const ExpenseTable: React.FC = () => {
  const { expenses, loading } = useExpenses();
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
  const { items: sortedExpenses, requestSort, sortConfig } = useSortableData(expenses);

  const filteredExpenses = sortedExpenses.filter((expense) => {
    const matchesSearch = Object.values(expense).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesDateRange = dateRange.startDate && dateRange.endDate
      ? new Date(expense.date) >= dateRange.startDate && new Date(expense.date) <= dateRange.endDate
      : true;
    return matchesSearch && matchesDateRange;
  });

  const handleDateRangeChange = (newDateRange: { startDate: Date | null; endDate: Date | null }) => {
    setDateRange(newDateRange);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <DateRangeFilter onDateRangeChange={handleDateRangeChange} />
        
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <ExpenseTableHeader
            requestSort={requestSort}
            sortConfig={sortConfig}
          />
          <tbody className="text-gray-600 text-sm font-light">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-4">
                  <LoadingSpinner />
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense) => (
                <ExpenseTableRow key={expense.id} expense={expense} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className='justify-end flex mt-4'>
        <ExportCSV data={filteredExpenses} />
      </div>
    </div>
  );
};
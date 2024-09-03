import React from 'react';
import { Download } from 'lucide-react';
import { Expense } from '../types/index';

interface ExportCSVProps {
  data: Expense[];
}

export const ExportCSV: React.FC<ExportCSVProps> = ({ data }) => {
  const exportToCSV = () => {
    const headers = ['Date', 'Merchant', 'Amount', 'Category', 'Description', 'Status'];
    const csvContent = [
      headers.join(','),
      ...data.map(expense => [
        expense.date,
        expense.merchant,
        expense.amount,
        expense.category,
        `"${expense.description.replace(/"/g, '""')}"`,
        expense.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'expenses.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={exportToCSV}
      className="flex items-center space-x-1 bg-[#051C2C] hover:bg-[#0B324E] text-white font-bold py-2 px-4 rounded"
    >
      <Download size={20} />
      <span>Export as CSV</span>
    </button>
  );
};
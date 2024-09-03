import React from 'react';
import { Expense } from '../types/index';
import { formatDate, formatAmount } from '../utils/formatters';

interface ExpenseTableRowProps {
  expense: Expense;
}

export const ExpenseTableRow: React.FC<ExpenseTableRowProps> = ({ expense }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        {formatDate(expense.date)}
      </td>
      <td className="py-3 px-6 text-left">{expense.merchant}</td>
      <td className="py-3 px-6 text-left">{formatAmount(expense.amount)}</td>
      <td className="py-3 px-6 text-left">{expense.category}</td>
      <td className="py-3 px-6 text-left">{expense.description}</td>
      <td className="py-3 px-6 text-left">{expense.status}</td>
    </tr>
  );
};
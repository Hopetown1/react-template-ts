import React from 'react';
import { ExpenseTable } from './components/ExpenseTable';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto flex py-6 px-4 sm:px-6 lg:px-8">
          <img
            src="/favicon.ico"
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-bold text-gray-900 ml-12">Expenses</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ExpenseTable />
        </div>
      </main>
    </div>
  );
};

export default App;
import { useState, useEffect } from 'react';
import { Expense } from '../types/index';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
          headers: {
            "Content-Type": "application/json",
            Username: "Jacob.Whyte" 
          }
        });
        
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return { expenses, loading };
};
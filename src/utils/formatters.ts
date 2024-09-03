// src/utils/formatters.ts
export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  export const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP',
    }).format(amount);
  };
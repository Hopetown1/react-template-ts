import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-44">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-[#051C2C]"></div>
    </div>
  );
};
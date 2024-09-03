import React, { useState } from 'react';


interface DateRangeFilterProps {
  onDateRangeChange: (dateRange: { startDate: Date | null; endDate: Date | null }) => void;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }

    onDateRangeChange({
      startDate: name === 'startDate' ? (value ? new Date(value) : null) : (startDate ? new Date(startDate) : null),
      endDate: name === 'endDate' ? (value ? new Date(value) : null) : (endDate ? new Date(endDate) : null),
    });
  };

  return (
    <div className="flex items-center space-x-2">

      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={handleDateChange}
        className="border rounded-md px-2 py-1 focus:ring-[#051C2C] focus:outline-none focus:ring-2"
      />
      <span>to</span>
      <input
        type="date"
        name="endDate"
        value={endDate}
        onChange={handleDateChange}
        className="border rounded-md px-2 py-1 focus:ring-[#051C2C] focus:outline-none focus:ring-2"
      />
    </div>
  );
};
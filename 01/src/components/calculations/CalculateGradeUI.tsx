import React, { useState, useEffect } from 'react';

// Props type for the main component
type GetItems = { getNoItems: number };

// Helper function to calculate grade and remarks
const calculateGrade = (score: number, totalItems: number) => {
  if (totalItems === 0 || isNaN(score)) {
    return {
      grade: 0,
      remarks: 'Please enter a valid score and number of items.',
    };
  }

  const grade = (score / totalItems) * 100;
  let remarks = '';

  if (grade >= 90) {
    remarks = 'A';
  } else if (grade >= 80) {
    remarks = 'B';
  } else if (grade >= 75) {
    remarks = 'C';
  } else {
    remarks = 'You failed...';
  }

  return { grade, remarks };
};

// Input field component
const ScoreInput: React.FC<{
  value: number;
  onChange: (value: number) => void;
  error: string;
  onFocus: () => void;
  max: number;
}> = ({ value, onChange, error, onFocus, max }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && event.target.value.length <= 3 && value <= max) {
      onChange(value);
    } else if (value > max) {
      onChange(max);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="number"
        value={isNaN(value) ? '' : value}
        onChange={handleInput}
        onFocus={onFocus}
        className="border rounded p-2 w-full"
        placeholder="Enter your score (max 3 digits)"
        maxLength={3}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

// Main component
const CalculateGradeUI: React.FC<GetItems> = ({ getNoItems }) => {
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState('');
  const [grade, setGrade] = useState<number>(0);
  const [remarks, setRemarks] = useState('');

  useEffect(() => {
    if (isNaN(score)) {
      setError('Please enter a valid number.');
      setGrade(0);
      setRemarks('');
    } else {
      setError('');
      const result = calculateGrade(score, getNoItems);
      setGrade(result.grade);
      setRemarks(result.remarks);
    }
  }, [score, getNoItems]);

  const handleFocus = () => {
    setScore(0);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Grade Calculator</h1>
      <ScoreInput
        value={score}
        onChange={setScore}
        error={error}
        onFocus={handleFocus}
        max={getNoItems}
      />
      <div className="mt-4 p-4 border rounded bg-gray-50">
        <p className="mb-2">
          Number of Items: <span className="font-semibold">{getNoItems}</span>
        </p>
        <p className="mb-2">
          Student Score: <span className="font-semibold">{score}</span>
        </p>
        <p className="mb-2">
          Final Grade: <span className="font-semibold">{grade.toFixed(2)}</span>
        </p>
        <p className="mb-2">
          Remarks: <span className="font-semibold">{remarks}</span>
        </p>
      </div>
    </div>
  );
};

export default CalculateGradeUI;

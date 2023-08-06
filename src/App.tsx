import * as React from 'react';
import SubmitButton from './SubmitButton/SubmitButton';


export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const handleClick = () => {
    const submitDuration = 1000;
    const resetDuration = 1500;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsDone(true);

      setTimeout(() => {
        setIsDone(false);
      }, resetDuration);
    }, 600 + submitDuration);
  };
  return (
    <div>
      <SubmitButton
        isLoading={isLoading}
        isDone={isDone}
        label='Submit'
        onClick={handleClick}
      />
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export const useSnackbar = (ms: number): [string, (text: string) => void] => {
  const [message, setMessage] = useState({ text: '' });
  const timer = useRef<Timer>();

  function setSnackbarMessage(text: string): void {
    setMessage({ text });
  }

  useEffect(() => {
    if (!message.text.length) return;
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setSnackbarMessage('');
    }, ms);
    return () => {
      clearTimeout(timer.current);
    };
  }, [message]);

  return [message.text, setSnackbarMessage];
};

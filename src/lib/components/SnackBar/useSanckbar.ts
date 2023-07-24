import { useState } from 'react';

type ReturnType = [string, (text: string) => void];

export const useSnackbar = (): ReturnType => {
  const [message, setMessage] = useState({ text: '' });

  function setSnackbarMessage(text: string): void {
    setMessage({ text });
  }

  return [message.text, setSnackbarMessage];
};

type SetMessage = (text: string) => void;

export type SnackBarProps = {
  message: string;
  duration: number;
  setMessage: SetMessage;
  isAppbar: boolean;
};

export type ListDropdownProps = {
  category: string;
  items: string[];
  value: string;
  width: string;
  onChange: (a: string) => void;
  onClose: (a: string) => void;
};

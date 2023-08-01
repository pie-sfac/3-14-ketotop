export type DropdownProps = {
  value: string;
  items: string[];
  title: string;
  placeholder: string;
  onChange: (params: string) => void;
  width: string;
};

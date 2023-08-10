export interface TabListProps {
  tapList: (string | undefined)[];
  selected: number;
  showMenuIdx: number[];
  onTabClick: (idx: number) => void;
}

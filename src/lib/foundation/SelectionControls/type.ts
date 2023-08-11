export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'checkbox' | 'radio';
  disabled?: boolean;
}

export interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  content?: string;
}
export interface ISelection {
  inputAttr: IInput;
  labelAttr?: ILabel;
}
